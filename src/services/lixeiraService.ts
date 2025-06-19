import api from './api';

export interface Lixeira {
  id: string;
  tipo: string;
  endereco: string;
  capacidadeMaxima: number;
  statusSensor: boolean;
  sensorId: string;
}

export const lixeiraService = {
  listar: async (): Promise<Lixeira[]> => {
    const response = await api.get('/lixeiras');
    return response.data;
  },

  cadastrar: async (lixeira: Omit<Lixeira, 'id'>): Promise<Lixeira> => {
    const response = await api.post('/lixeiras', lixeira);
    return response.data;
  },

  buscarPorId: async (id: string): Promise<Lixeira> => {
    const response = await api.get(`/lixeiras/${id}`);
    return response.data;
  },

  atualizar: async (id: string, lixeira: Omit<Lixeira, 'id'>): Promise<Lixeira> => {
    const response = await api.put(`/lixeiras/${id}`, lixeira);
    return response.data;
  },

  excluir: async (id: string) => {
    await api.delete(`/lixeiras/${id}`);
  },
};
