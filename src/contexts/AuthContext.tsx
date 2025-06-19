import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

// 🔐 Tipagem do usuário conforme backend
interface User {
  id: string;
  username: string;
  role: string;
}

// 🔐 Tipagem do contexto
interface AuthContextType {
  user: User | null;
  login: (username: string, senha: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// 🔥 Cria o contexto
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// 🔥 Função utilitária segura para pegar dados do localStorage
function getParsedLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    return JSON.parse(item);
  } catch {
    console.warn(`Erro ao fazer parse do localStorage key=${key}`);
    return null;
  }
}

// 🔥 Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  // 🔥 Persistência no localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = getParsedLocalStorage<User>('user');

    if (token && storedUser) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(storedUser);
    }
  }, []);

  // 🔐 Login
  const login = async (username: string, senha: string) => {
    try {
      const response = await api.post('/auth/login', { username, senha });

      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser(user);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  };

  // 🔓 Logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔥 Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);
