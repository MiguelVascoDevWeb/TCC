import React, { useEffect, useState } from 'react';
import {Alert, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import Colors from '@/styles/colors';
import GlobalStyles from '@/styles/global';
import { EnergyDevice, EnergyDevicePayload } from '@/types/EnergyDevice';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  createElectricEquipment,
  getAllElectricEquipments,
  updateElectricEquipment,
  deleteEquipment
} from '@/api/equipments'; // nome sugerido do arquivo

type Props = NativeStackScreenProps<EnergyStackParamList, 'EnergiaDispositivos'>;

export default function EnergyDevicesScreen({ navigation }: Props) {
  const [devices, setDevices] = useState<EnergyDevice[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setEditing] = useState<EnergyDevice | null>(null);

  const [nome, setNome] = useState('');
  const [potencia, setPotencia] = useState('');
  const [horasPorDia, setHorasPorDia] = useState('');

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const result = await getAllElectricEquipments();
      setDevices(result);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dispositivos.');
    }
  };

  const resetForm = () => {
    setNome('');
    setPotencia('');
    setHorasPorDia('');
    setEditing(null);
  };

  const calcConsumo = (p: number, h: number) => (p * h * 30) / 1000;

  const handleSave = async () => {
    const p = Number(potencia);
    const h = Number(horasPorDia);

    if (!nome.trim() || isNaN(p) || isNaN(h) || p <= 0 || h <= 0) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente.');
      return;
    }

    const devicePayload: EnergyDevicePayload = {
      name: nome.trim(),
      kw: p,
      time: h,
      totalConsum: calcConsumo(p, h),
    };

    try {
      if (editing) {
        await updateElectricEquipment(editing.id, devicePayload);
      } else {
        console.log(devicePayload);
        await createElectricEquipment(devicePayload);
      }

      fetchDevices();
      resetForm();
      setModalVisible(false);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o dispositivo.' + error);
    }
  };

  const handleEdit = (device: EnergyDevice) => {
    setNome(device.name);
    setPotencia(device.kw.toString());
    setHorasPorDia(device.time.toString());
    setEditing(device);
    setModalVisible(true);
  };

  const handleRemove = (id: string) => {
    Alert.alert(
      'Remover dispositivo',
      'Tem certeza que deseja remover este dispositivo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteEquipment(id, 'ELECTRIC');
              fetchDevices();
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível remover o dispositivo.');
            }
          }
        }
      ]
    );
  };

  return (
    <MainContainer>
      <FlatList
        data={devices}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[GlobalStyles.cardDevice, { backgroundColor: Colors.yellowSecondary }]}>
            <TouchableOpacity onPress={() => handleEdit(item)}>
              <Text style={{ color: Colors.yellowDark }}>
                {item.name} — {isNaN(item.totalConsum) ? 'N/A' : `${item.totalConsum.toFixed(2)} kWh/mês`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemove(item.id)}>
              <Text style={{ color: Colors.brownDark }}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={[GlobalStyles.modalView, { borderColor: Colors.yellowSecondary }]}>
          <CenteredView height="60%">
            <TextInput
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
              style={[GlobalStyles.inputSimple, { borderColor: Colors.yellow }]}
            />
            <TextInput
              placeholder="Potência em Watts"
              keyboardType="numeric"
              value={potencia}
              onChangeText={setPotencia}
              style={[GlobalStyles.inputSimple, { borderColor: Colors.yellow }]}
            />
            <TextInput
              placeholder="Média de uso horas/dia"
              keyboardType="numeric"
              value={horasPorDia}
              onChangeText={setHorasPorDia}
              style={[GlobalStyles.inputSimple, { borderColor: Colors.yellow }]}
            />
          </CenteredView>
          <View style={GlobalStyles.buttonView}>
            <ButtonSimple
              onPress={handleSave}
              title={editing ? 'Atualizar' : 'Adicionar'}
              backgroundColor={Colors.yellow}
            />
            <ButtonSimple
              onPress={() => {
                resetForm();
                setModalVisible(false);
              }}
              title="Cancelar"
              backgroundColor={Colors.yellow}
            />
          </View>
        </View>
      </Modal>

      <CenteredView height="30%">
        <ButtonSimple
          onPress={() => setModalVisible(true)}
          title="Adicionar Novo Dispositivo"
          backgroundColor={Colors.yellow}
        />
      </CenteredView>
    </MainContainer>
  );
}
