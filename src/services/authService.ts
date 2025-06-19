import api from './api';

export const authService = {
  register: async (data: { username: string; senha: string; role: string }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
};
