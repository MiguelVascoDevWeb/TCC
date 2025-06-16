import { api } from './api';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

export async function login(data: LoginData) {
  const response = await api.post<AuthResponse>('/auth/login', data);
  return response.data;
}

export async function register(data: RegisterData) {
  const response = await api.post<AuthResponse>('/auth/register', data);
  return response.data;
}

// Envia email com código para recuperação
export async function forgotPassword(email: string) {
  const response = await api.post('/auth/forgot-password', { email });
  return response.data;
}

// Verifica se o código de recuperação é válido para o email
export async function verifyRecoveryCode(email: string, code: string) {
  const response = await api.post('/auth/verify-code', { email, code });
  return response;  // Supondo que o backend retorne { isValid: boolean }
}

// Reseta a senha com token + nova senha + email
export async function resetPassword(email: string, code: string, newPassword: string) {
  const response = await api.post('/auth/reset-password', {
    email,
    code,
    newPassword,
  });
  return response.data;
}
