import { getProfile } from '@/api/user';
import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import TextCard from '@/components/TextCard';
import Title from '@/components/Title';
import { useAuth } from '@/hooks/useAuth';
//import { loadDevicesFromStorageEnergy } from '@/repositories/LocalStorageEnergy';
//import { loadDevicesFromStorageWater } from '@/repositories/LocalStorageWater';
import GlobalStyles from '@/styles/global';
import HomeScreenStyle from '@/styles/Pages/HomeScreenStyle';
import { EnergyDevice } from '@/types/EnergyDevice';
import { User } from '@/types/interfaces/User';
import { WaterDevice } from '@/types/WaterDevice';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, ScrollView} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootTabParamList } from '@/types/RootTabParamList';
import { getAllElectricEquipments, getAllWaterEquipments } from '@/api/equipments';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootTabParamList>;


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
        const listaEnergia = await getAllElectricEquipments();
        setEnergyDevices(listaEnergia);
        const somaEnergia = listaEnergia.reduce((acc, item) => acc + item.totalConsum, 0);
        setConsumoTotal(somaEnergia);

        const listaAgua = await getAllWaterEquipments();
        setWaterDevices(listaAgua);
        const somaAgua = listaAgua.reduce((acc: any, item: { totalConsum: any; }) => acc + item.totalConsum, 0);
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

  //navegação dos cards para suas respectivas sessões de textos
  const navigation = useNavigation<HomeScreenNavigationProp>();
  

  return (
    <ScrollView style={GlobalStyles.scrollViewContainer}>
      <Title style={{textAlign:'center', marginTop: 60}}>Bem-vindo, {user?.name} 👋</Title>

      <View style={HomeScreenStyle.card}>

        <Text style={HomeScreenStyle.label}>Nome:</Text>
        <Text style={HomeScreenStyle.value}>{user?.name}</Text>

        <Text style={HomeScreenStyle.label}>Email:</Text>
        <Text style={HomeScreenStyle.value}>{user?.email}</Text>

        <Text style={HomeScreenStyle.label}>Consumo de Energia por mês</Text>
        <Text style={HomeScreenStyle.value}>{consumoTotal.toFixed(2)} kWh/mês</Text>

        <Text style={HomeScreenStyle.label}>Consumo de Água por mês</Text>
        <Text style={HomeScreenStyle.value}>{consumoTotalAgua.toFixed(2)} m³/mês</Text>
      </View>

      <TextCard
        title='Titulo Muito Massa'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys_mniGFFu4CRmTbqEi4m0B-OJEONm4OMVw&s'
        buttonTitle='Mais textos sobre Energia'
        onPressButton={() => {navigation.navigate('Energia', {screen: 'EnergiaTexto'})}}
      >
      </TextCard>
      <TextCard
        title='Titulo Muito Massa'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys_mniGFFu4CRmTbqEi4m0B-OJEONm4OMVw&s'
        buttonTitle='Mais textos sobre Lixo'
        onPressButton={() => {navigation.navigate('Lixo', {screen: 'LixoTexto'})}}
      >
      </TextCard>
      <TextCard
        title='Titulo Muito Massa'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys_mniGFFu4CRmTbqEi4m0B-OJEONm4OMVw&s'
        buttonTitle='Mais textos sobre Água'
        onPressButton={() => {navigation.navigate('Água', {screen: 'AguaTexto'})}}

      >
      </TextCard>

      
      <CenteredView style={{marginBottom: 20}} height='50'>
        <ButtonSimple
          onPress={signOut}
          title='Sair'
        />
      </CenteredView>
    </ScrollView>
  );
}

