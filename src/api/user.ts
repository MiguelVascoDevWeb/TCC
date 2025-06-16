import { api } from './api';

interface User {
  id: string;
  name: string;
  email: string;
}

export async function getProfile() {
    const response = await api.get<User>('/auth/me');
    return response.data;
}

export async function updatePassword(newPassword: string) {
    const response = await api.put('/auth/update', { password: newPassword });
    return response.data;
}
