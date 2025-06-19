import { Modal } from '../../components/Modal';
import React, { useEffect, useState } from 'react';
import {
  TrashContainer, TrashHeader, TrashList, TrashItem, TrashStatus,
  TrashActions, TrashButton, Input
} from './styles';

import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { lixeiraService } from '../../services/lixeiraService';
import type { Lixeira } from '../../services/lixeiraService';
import GreenButton from '../../components/GreenButton';
import Swal from 'sweetalert2';

const statusColors: { [key: string]: string } = {
  'ativo': '#44AA00',
  'inativo': '#444',
};

const lixeirasIniciais: Omit<Lixeira, 'id'>[] = [
  {
    tipo: 'Lixeira',
    endereco: 'Rua Caçador Narciso, 136',
    capacidadeMaxima: 120,
    statusSensor: true,
    sensorId: 'sensor-4f9e2d',
  },
  {
    tipo: 'Lixeira',
    endereco: 'Rua das Flores, 200',
    capacidadeMaxima: 100,
    statusSensor: true,
    sensorId: 'sensor-1a2b3c',
  },
  {
    tipo: 'Caçamba',
    endereco: 'Avenida Brasil, 500',
    capacidadeMaxima: 500,
    statusSensor: true,
    sensorId: 'sensor-7h8j9k',
  },
  {
    tipo: 'Lixeira',
    endereco: 'Rua das Acácias, 50',
    capacidadeMaxima: 90,
    statusSensor: false,
    sensorId: 'sensor-x9y8z7',
  },
];

const Trash: React.FC = () => {
  const [lixeiras, setLixeiras] = useState<Lixeira[]>([]);
  const [tipo, setTipo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [sensorId, setSensorId] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const carregarLixeiras = async () => {
    const data = await lixeiraService.listar();
    setLixeiras(data);

    if (data.length === 0) {
      for (const lixeira of lixeirasIniciais) {
        await lixeiraService.cadastrar(lixeira);
      }
      const atualizadas = await lixeiraService.listar();
      setLixeiras(atualizadas);
    }
  };

  const handleCadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipo || !endereco || !capacidade || !sensorId) return;
  
    await lixeiraService.cadastrar({
      tipo,
      endereco,
      capacidadeMaxima: parseInt(capacidade),
      statusSensor: true,
      sensorId,
    });
  
    setOpenModal(false); // Fecha o modal antes
  
    setTipo('');
    setEndereco('');
    setCapacidade('');
    setSensorId('');
  
    await carregarLixeiras();
  
    // Alerta de sucesso
    Swal.fire({
      icon: 'success',
      title: 'Cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  


  const handleExcluir = async (id: string) => {
    await lixeiraService.excluir(id);
    await carregarLixeiras();
  };

  useEffect(() => {
    carregarLixeiras();
  }, []);

  return (
    <TrashContainer>
      <TrashHeader>
        <span>Gerenciamento de Lixeiras e Caçambas</span>
        <Modal
          title="Cadastrar Lixeira"
          triggerLabel="Cadastrar Nova Lixeira"
          open={openModal}
          onOpenChange={setOpenModal}
        >
          <form onSubmit={handleCadastrar}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Inputs */}
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
              <GreenButton type="submit">Cadastrar</GreenButton>
            </div>
          </form>
        </Modal>
      </TrashHeader>
      <TrashList>
        {lixeiras.map((item) => (
          <TrashItem key={item.id}>
            <div>
              <strong>
                {item.tipo} - {item.endereco}
              </strong>
              <TrashStatus style={{ background: item.statusSensor ? statusColors['ativo'] : statusColors['inativo'] }}>
                {item.statusSensor ? 'Ativo' : 'Não rastreável'}
              </TrashStatus>
            </div>
            <div style={{ fontSize: 12 }}>
              Sensor: {item.sensorId} • Capacidade: {item.capacidadeMaxima}kg
            </div>
            <TrashActions>
              <button title="Visualizar">
                <FiEye />
              </button>
              <button title="Editar">
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
