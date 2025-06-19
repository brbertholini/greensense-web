import api from './api';

export interface Material {
  id: string;
  tipo: string;
  quantidade: number;
  unidade: string;
  nomeUsuario: string;
  lixeiraId: string;
}

export const materialService = {
  listarPorLixeira: async (lixeiraId: string): Promise<Material[]> => {
    const response = await api.get(`/material/lixeira/${lixeiraId}`);
    return response.data;
  },

  cadastrar: async (material: Omit<Material, 'id'>): Promise<Material> => {
    const response = await api.post('/material', material);
    return response.data;
  },

  atualizar: async (
    id: string,
    material: Omit<Material, 'id' | 'lixeiraId'>
  ): Promise<Material> => {
    const response = await api.put(`/material/${id}`, material);
    return response.data;
  },

  excluir: async (id: string) => {
    await api.delete(`/material/${id}`);
  },
};
