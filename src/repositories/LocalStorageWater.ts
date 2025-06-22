import { WaterDevice } from '@/types/WaterDevice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@waterDevices';

export const saveDevicesToStorageWater = async (devicesToSave: WaterDevice[]) => {
  try {
    const json = JSON.stringify(devicesToSave);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.error('Erro ao salvar dispositivos:', error);
  }
};

export const loadDevicesFromStorageWater = async (): Promise<WaterDevice[]> => {
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
