import React from 'react';
import { UsersContainer, UsersHeader, UsersTable, UsersActions, UsersButton, SearchInput } from './styles';
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

const usersData = [
  { id: '001', email: 'gestor@email.com', categoria: 'Administrador', telefone: '11 999999999' },
  { id: '002', email: 'gestor@email.com', categoria: 'Administrador', telefone: '11 999999999' },
  { id: '003', email: 'gestor@email.com', categoria: 'Administrador', telefone: '11 999999999' },
  { id: '004', email: 'gestor@email.com', categoria: 'Administrador', telefone: '11 999999999' },
  { id: '005', email: 'gestor@email.com', categoria: 'Administrador', telefone: '11 999999999' },
  { id: '006', email: 'gestor@email.com', categoria: 'Administrador', telefone: '11 999999999' },
  { id: '007', email: 'gestor@email.com', categoria: 'Administrador', telefone: '11 999999999' },
];

const Users: React.FC<{ onBack?: () => void }> = () => (
  <UsersContainer>
    <UsersHeader>
      <UsersButton>Novo Usuário</UsersButton>
      <SearchInput placeholder="Pesquisar..." />
    </UsersHeader>
    <UsersTable>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Categoria</th>
          <th>Telefone</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.categoria}</td>
            <td>{user.telefone}</td>
            <td>
              <UsersActions>
                <button title="Visualizar"><FiEye /></button>
                <button title="Editar"><FiEdit2 /></button>
                <button title="Excluir"><FiTrash2 /></button>
              </UsersActions>
            </td>
          </tr>
        ))}
      </tbody>
    </UsersTable>
  </UsersContainer>
);

export default Users;