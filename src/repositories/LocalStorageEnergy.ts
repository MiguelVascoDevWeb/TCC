import { EnergyDevice } from '@/types/EnergyDevice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@devices';

export const saveDevicesToStorageEnergy = async (devicesToSave: EnergyDevice[]) => {
  try {
    const json = JSON.stringify(devicesToSave);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.error('Erro ao salvar dispositivos:', error);
  }
};

export const loadDevicesFromStorageEnergy = async (): Promise<EnergyDevice[]> => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json) {
      return JSON.parse(json);
    }
    return [];
  } catch (error) {
    console.error('Erro ao carregar dispositivos:', error);
    return [];
  }
};
