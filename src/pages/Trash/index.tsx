import { Modal } from '../../components/Modal';
import React, { useEffect, useState } from 'react';
import {
  TrashContainer, TrashHeader, TrashList, TrashItem, TrashStatus,
  TrashActions, Input
} from './styles';

import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { lixeiraService } from '../../services/lixeiraService';
import type { Lixeira } from '../../services/lixeiraService';
import GreenButton from '../../components/GreenButton';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const statusColors: { [key: string]: string } = {
  'ativo': '#44AA00',
  'inativo': '#444',
};

const Trash: React.FC = () => {
  const [lixeiras, setLixeiras] = useState<Lixeira[]>([]);
  const [tipo, setTipo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [sensorId, setSensorId] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const carregarLixeiras = async () => {
    const data = await lixeiraService.listar();
    setLixeiras(data);
  };

  const handleEditar = (lixeira: Lixeira) => {
    setTipo(lixeira.tipo);
    setEndereco(lixeira.endereco);
    setCapacidade(lixeira.capacidadeMaxima.toString());
    setSensorId(lixeira.sensorId);
    setCurrentEditId(lixeira.id);
    setIsEditing(true);
    setOpenModal(true);
  };

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipo || !endereco || !capacidade || !sensorId) return;

    const payload = {
      tipo,
      endereco,
      capacidadeMaxima: parseInt(capacidade),
      statusSensor: true,
      sensorId,
    };

    if (isEditing && currentEditId) {
      await lixeiraService.atualizar(currentEditId, payload);
    } else {
      await lixeiraService.cadastrar(payload);
    }

    setOpenModal(false);
    setTipo('');
    setEndereco('');
    setCapacidade('');
    setSensorId('');
    setIsEditing(false);
    setCurrentEditId(null);

    await carregarLixeiras();

    Swal.fire({
      icon: 'success',
      title: isEditing ? 'Atualizado com sucesso!' : 'Cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleExcluir = async (id: string) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      await lixeiraService.excluir(id);
      await carregarLixeiras();
      Swal.fire('Excluído!', 'A lixeira foi removida.', 'success');
    }
  };

  useEffect(() => {
    carregarLixeiras();
  }, []);

  return (
    <TrashContainer>
      <TrashHeader>
        <span>Gerenciamento de Lixeiras e Caçambas</span>
        <Modal
          title={isEditing ? 'Editar Lixeira' : 'Cadastrar Lixeira'}
          triggerLabel={isEditing ? 'Editar Lixeira' : 'Cadastrar Nova Lixeira'}
          open={openModal}
          onOpenChange={(open) => {
            if (!open) {
              setIsEditing(false);
              setCurrentEditId(null);
              setTipo('');
              setEndereco('');
              setCapacidade('');
              setSensorId('');
            }
            setOpenModal(open);
          }}
        >
          <form onSubmit={handleSalvar}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Input
                placeholder="Tipo (Lixeira ou Caçamba)"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              />
              <Input
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
              />
              <Input
                placeholder="Capacidade Máxima (kg)"
                type="number"
                value={capacidade}
                onChange={(e) => setCapacidade(e.target.value)}
                required
              />
              <Input
                placeholder="ID do Sensor"
                value={sensorId}
                onChange={(e) => setSensorId(e.target.value)}
                required
              />
              <GreenButton type="submit">{isEditing ? 'Atualizar' : 'Cadastrar'}</GreenButton>
            </div>
          </form>
        </Modal>
      </TrashHeader>

      <TrashList>
        {lixeiras.map((item) => (
          <TrashItem key={item.id}>
            <div>
              <strong>{item.tipo} - {item.endereco}</strong>
              <TrashStatus style={{ background: item.statusSensor ? statusColors['ativo'] : statusColors['inativo'] }}>
                {item.statusSensor ? 'Ativo' : 'Não rastreável'}
              </TrashStatus>
            </div>
            <div style={{ fontSize: 12 }}>
              Sensor: {item.sensorId} • Capacidade: {item.capacidadeMaxima}kg
            </div>
            <TrashActions>
              <button title="Visualizar" onClick={() => navigate(`/trash/${item.id}`)}>
                <FiEye />
              </button>
              <button title="Editar" onClick={() => handleEditar(item)}>
                <FiEdit2 />
              </button>
              <button title="Excluir" onClick={() => handleExcluir(item.id)}>
                <FiTrash2 />
              </button>
            </TrashActions>
          </TrashItem>
        ))}
      </TrashList>
    </TrashContainer>
  );
};

export default Trash;
