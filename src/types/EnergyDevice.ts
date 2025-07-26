// Para criação e edição (sem ID)
export type EnergyDevicePayload = {
  userId?: string;
  name: string;
  kw: number;
  time: number;
  totalConsum: number;
};

// Para resposta da API (com ID)
export type EnergyDevice = EnergyDevicePayload & {
  id: string;
};
