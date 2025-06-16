import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://376347a8-e6fc-459e-a12e-39db9ccea617-00-3pus5i0edkpag.worf.replit.dev/', // ⬅️ coloque seu IP local + porta da API
});