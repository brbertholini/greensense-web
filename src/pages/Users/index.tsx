import React, { useState } from 'react';
import {
  UsersContainer,
  UsersHeader,
  UsersTable,
  UsersActions,
  UsersButton,
  SearchInput,
  Input,
  Label,
  Form,
} from './styles';

import { Modal } from '../../components/Modal';
import GreenButton from '../../components/GreenButton';
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { authService } from '../../services/authService';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

type User = {
  id: string;
  username: string;
  email: string;
  telefone: string;
  categoria: 'Operacional';
};

// Função para gerar senha aleatória
const gerarSenha = (tamanho = 8) => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }
  return senha;
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [open, setOpen] = useState(false);

  const handleCadastrar = async (e: React.FormEvent) => {
    e.preventDefault();

    const senhaGerada = gerarSenha(8);

    try {
      await authService.register({
        username,
        senha: senhaGerada,
        role: 'OPERACIONAL',
      });

      const newUser: User = {
        id: crypto.randomUUID(),
        username,
        email,
        telefone,
        categoria: 'Operacional',
      };

      setUsers((prev) => [...prev, newUser]);

      setUsername('');
      setEmail('');
      setTelefone('');
      setOpen(false);

      await Swal.fire({
        icon: 'success',
        title: '<span style="font-family: Inter, sans-serif;">Usuário cadastrado com sucesso!</span>',
        html: `
          <div style="text-align: left; font-family: Inter, sans-serif;">
            <p><strong>Username:</strong> ${newUser.username}</p>
            <p><strong>Email:</strong> ${newUser.email}</p>
            <p><strong>Telefone:</strong> ${newUser.telefone}</p>
            <p>Os dados de acesso foram enviados por email.</p>
          </div>
        `,
        confirmButtonColor: '#44AA00',
        confirmButtonText: 'Fechar',
      });
      
      

    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Swal.fire('Erro', 'Erro ao cadastrar usuário', 'error');
    }
  };

  const handleExcluir = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.telefone.includes(search)
  );

  return (
    <UsersContainer>
      <UsersHeader>
        <Modal
          title="Cadastrar Usuário"
          triggerLabel="Novo Usuário"
          open={open}
          onOpenChange={setOpen}
        >
          <Form onSubmit={handleCadastrar}>
            <Label>Username</Label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Label>Telefone</Label>
            <Input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />

            <GreenButton type="submit">Cadastrar</GreenButton>
          </Form>
        </Modal>

        <SearchInput
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </UsersHeader>

      <UsersTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Categoria</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id.substring(0, 6)}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.telefone}</td>
              <td>{user.categoria}</td>
              <td>
                <UsersActions>
                  <button title="Visualizar">
                    <FiEye />
                  </button>
                  <button title="Editar">
                    <FiEdit2 />
                  </button>
                  <button title="Excluir" onClick={() => handleExcluir(user.id)}>
                    <FiTrash2 />
                  </button>
                </UsersActions>
              </td>
            </tr>
          ))}
        </tbody>
      </UsersTable>
    </UsersContainer>
  );
};

export default Users;
