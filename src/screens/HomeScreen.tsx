import { getProfile } from '@/api/user';
import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import Title from '@/components/Title';
import { useAuth } from '@/hooks/useAuth';
import { loadDevicesFromStorageEnergy } from '@/repositories/LocalStorageEnergy';
import { loadDevicesFromStorageWater } from '@/repositories/LocalStorageWater';
import HomeScreenStyle from '@/styles/Pages/HomeScreenStyle';
import { EnergyDevice } from '@/types/EnergyDevice';
import { User } from '@/types/interfaces/User';
import { WaterDevice } from '@/types/WaterDevice';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default function HomeScreen() {
  const { signOut } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [devices, setEnergyDevices] = useState<EnergyDevice[]>([]);
  const [consumoTotal, setConsumoTotal] = useState(0);

  const [waterDevices, setWaterDevices] = useState<WaterDevice[]>([]);
  const [consumoTotalAgua, setConsumoTotalAgua] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const carregar = async () => {
        const listaEnergia = await loadDevicesFromStorageEnergy();
        setEnergyDevices(listaEnergia);
        const soma = listaEnergia.reduce((acc, item) => acc + item.consumoMes, 0);
        setConsumoTotal(soma);

        const listaAgua = await loadDevicesFromStorageWater();
        setWaterDevices(listaAgua);
        const somaAgua = listaAgua.reduce((acc, item) => acc + item.consumoMes, 0);
        setConsumoTotalAgua(somaAgua);
      };

      carregar();
    }, [])
  );


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        setUser(userData);
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <View style={HomeScreenStyle.loadingContainer}>
        <ActivityIndicator size="large" color="#41D499" />
        <Text>Carregando perfil...</Text>
      </View>
    );
  }
  

  return (
    <MainContainer>
      <CenteredView>
        <Title>Bem-vindo, {user?.name} 👋</Title>

        <View style={HomeScreenStyle.card}>
          <Text style={HomeScreenStyle.label}>ID:</Text>
          <Text style={HomeScreenStyle.value}>{user?.id}</Text>

          <Text style={HomeScreenStyle.label}>Nome:</Text>
          <Text style={HomeScreenStyle.value}>{user?.name}</Text>

          <Text style={HomeScreenStyle.label}>Email:</Text>
          <Text style={HomeScreenStyle.value}>{user?.email}</Text>

          <Text style={HomeScreenStyle.label}>Consumo de Energia por mês</Text>
          <Text style={HomeScreenStyle.value}>{consumoTotal.toFixed(2)} kWh/mês</Text>

          <Text style={HomeScreenStyle.label}>Consumo de Água por mês</Text>
          <Text style={HomeScreenStyle.value}>{consumoTotalAgua.toFixed(2)} m³/mês</Text>
        </View>

        <ButtonSimple
          onPress={signOut}
          title='Sair'
        />
      </CenteredView>
    </MainContainer>
  );
}

