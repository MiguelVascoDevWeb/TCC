// Para criação e edição (sem ID)
export type WaterDevicePayload = {
    userId?: string;
    name: string;
    l: number; // em litros
    time: number;
    totalConsum: number;
};

// Para resposta da API (com ID)
export type WaterDevice = WaterDevicePayload & {
  id: string;
};

