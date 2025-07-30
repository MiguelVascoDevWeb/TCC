import { EnergyDevice, EnergyDevicePayload } from '@/types/EnergyDevice';
import { api } from './api';
import { WaterDevice, WaterDevicePayload } from '@/types/WaterDevice';

type EquipmentType = 'WATER' | 'ELECTRIC';

export async function createElectricEquipment(data: EnergyDevicePayload) {
  const response = await api.post<EnergyDevice>('/equipment/electric', data);
  return response.data;
}

export async function getAllElectricEquipments() {
  const response = await api.get<EnergyDevice[]>('/equipment/electric');
  return response.data;
}

export async function updateElectricEquipment(id: string, data: EnergyDevicePayload) {
  const response = await api.put<EnergyDevice>(`/equipment/electric/${id}`, data);
  return response.data;
}

export async function deleteEquipment(id: string, type: EquipmentType ) {
  const response = await api.delete(`/delequipment/${id}`, {
    data: { type },
  });

  return response.status === 204;
}

// =======================
// 💧 Hídricos
// ======================= 

export async function createWaterEquipment(data: WaterDevicePayload) {
  const response = await api.post<WaterDevice>('/equipment/water', data);
  return response.data;
}

export async function getAllWaterEquipments() {
  const response = await api.get<WaterDevice[]>('/equipment/water');
  return response.data;
}

export async function updateWaterEquipment(id: string, data: WaterDevicePayload) {
  const response = await api.put<WaterDevice>(`/equipment/water/${id}`, data);
  return response.data;
}
