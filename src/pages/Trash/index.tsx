import React from 'react';
import { TrashContainer, TrashHeader, TrashList, TrashItem, TrashStatus, TrashActions, TrashButton } from './styles';
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import GreenButton from '@components/GreenButton';

const trashData = [
  { id: 'lx001231', type: 'Lixeira', status: 'Nível Baixo', statusColor: '#44AA00' },
  { id: 'lx001225', type: 'Lixeira', status: 'Nível Médio', statusColor: '#FF8000' },
  { id: 'cb00644', type: 'Caçamba', status: 'Nível Alto', statusColor: '#FF0000' },
  { id: 'lx008533', type: 'Lixeira', status: 'Não rastreável', statusColor: '#444' },
];

const Trash: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <TrashContainer>
    <TrashHeader>
      <span>Gerenciamento de Lixeiras e Caçambas</span>
      <TrashButton as={GreenButton}>Cadastrar Nova Lixeira</TrashButton>
    </TrashHeader>
    <TrashList>
      {trashData.map((item) => (
        <TrashItem key={item.id}>
          <div>
            <strong>
              {item.type} #{item.id}
            </strong>
            <TrashStatus style={{ background: item.statusColor }}>
              {item.status}
            </TrashStatus>
          </div>
          <TrashActions>
            <button title="Visualizar"><FiEye /></button>
            <button title="Editar"><FiEdit2 /></button>
            <button title="Excluir"><FiTrash2 /></button>
          </TrashActions>
        </TrashItem>
      ))}
    </TrashList>
  </TrashContainer>
);

export default Trash;