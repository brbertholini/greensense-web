import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { lixeiraService } from '../../services/lixeiraService';
import type { Lixeira } from '../../services/lixeiraService';
import {
  DetailContainer,
  DetailHeader,
  DetailItem,
  Label,
  Value,
  StatusTag,
  BackButton,
  MaterialList,
  MaterialItem,
  MaterialActions,
  Input,
} from './styles';
import Swal from 'sweetalert2';
import { materialService } from '../../services/materialService';
import type { Material } from '../../services/materialService';
import GreenButton from '../../components/GreenButton';

const TrashDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lixeira, setLixeira] = useState<Lixeira | null>(null);
  const [materiais, setMateriais] = useState<Material[]>([]);

  const [tipo, setTipo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);

  const carregarMateriais = async () => {
    if (id) {
      const data = await materialService.listarPorLixeira(id);
      setMateriais(data);
    }
  };

  const handleSalvarMaterial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipo || !quantidade || !unidade || !nomeUsuario) return;

    const payload = {
      tipo,
      quantidade: parseFloat(quantidade),
      unidade,
      nomeUsuario,
      lixeiraId: id as string, // 🔥 Sempre envia o lixeiraId
    };

    if (isEditing && currentEditId) {
      await materialService.atualizar(currentEditId, payload);
    } else {
      await materialService.cadastrar(payload);
    }

    setTipo('');
    setQuantidade('');
    setUnidade('');
    setNomeUsuario('');
    setIsEditing(false);
    setCurrentEditId(null);

    await carregarMateriais();

    Swal.fire({
      icon: 'success',
      title: isEditing ? 'Material atualizado!' : 'Material cadastrado!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleEditarMaterial = (material: Material) => {
    setTipo(material.tipo);
    setQuantidade(material.quantidade.toString());
    setUnidade(material.unidade);
    setNomeUsuario(material.nomeUsuario);
    setCurrentEditId(material.id);
    setIsEditing(true);
  };

  const handleExcluirMaterial = async (id: string) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      await materialService.excluir(id);
      await carregarMateriais();
      Swal.fire('Excluído!', 'O material foi removido.', 'success');
    }
  };

  useEffect(() => {
    const fetchLixeira = async () => {
      const data = await lixeiraService.buscarPorId(id as string);
      setLixeira(data);
    };
    fetchLixeira();
  }, [id]);

  useEffect(() => {
    if (id) {
      carregarMateriais();
    }
  }, [id]);

  if (!lixeira) return <p>Carregando...</p>;

  return (
    <DetailContainer>
      <DetailHeader>
        <h2>Detalhes da Lixeira</h2>
      </DetailHeader>

      <DetailItem>
        <Label>Tipo:</Label>
        <Value>{lixeira.tipo}</Value>
      </DetailItem>

      <DetailItem>
        <Label>Endereço:</Label>
        <Value>{lixeira.endereco}</Value>
      </DetailItem>

      <DetailItem>
        <Label>Capacidade:</Label>
        <Value>{lixeira.capacidadeMaxima} kg</Value>
      </DetailItem>

      <DetailItem>
        <Label>Sensor ID:</Label>
        <Value>{lixeira.sensorId}</Value>
      </DetailItem>

      <DetailItem>
        <Label>Status:</Label>
        <StatusTag active={lixeira.statusSensor}>
          {lixeira.statusSensor ? 'Ativo' : 'Não rastreável'}
        </StatusTag>
      </DetailItem>

      <DetailHeader>
        <h3>Materiais Coletados</h3>
      </DetailHeader>

      <form
        onSubmit={handleSalvarMaterial}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <Input
          placeholder="Tipo (ex.: Reciclável)"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        />
        <Input
          placeholder="Quantidade"
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        />
        <Input
          placeholder="Unidade (ex.: kg)"
          value={unidade}
          onChange={(e) => setUnidade(e.target.value)}
          required
        />
        <Input
          placeholder="Nome do Usuário"
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
          required
        />
        <GreenButton type="submit">
          {isEditing ? 'Atualizar' : 'Cadastrar'}
        </GreenButton>
      </form>

      <MaterialList>
        {materiais.map((m) => (
          <MaterialItem key={m.id}>
            <div>
              <strong>{m.tipo}</strong> - {m.quantidade} {m.unidade}
            </div>
            <div style={{ fontSize: 12 }}>
              Usuário: {m.nomeUsuario}
            </div>
            <MaterialActions>
              <button onClick={() => handleEditarMaterial(m)}>Editar</button>
              <button onClick={() => handleExcluirMaterial(m.id)}>Excluir</button>
            </MaterialActions>
          </MaterialItem>
        ))}
      </MaterialList>

      <BackButton onClick={() => navigate('/trash')}>Voltar</BackButton>
    </DetailContainer>
  );
};

export default TrashDetail;
