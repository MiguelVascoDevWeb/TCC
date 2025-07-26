import { createWaterEquipment, deleteEquipment, getAllWaterEquipments, updateWaterEquipment } from '@/api/equipments';
import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import { calcConsumo } from '@/repositories/calcConsumo';
import Colors from '@/styles/colors';
import GlobalStyles from '@/styles/global';
import { WaterDevice, WaterDevicePayload } from '@/types/WaterDevice';
import { WaterStackParamList } from '@/types/WaterStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = NativeStackScreenProps<WaterStackParamList, 'AguaDispositivos'>;


export default function WaterDevicesScreen({ navigation }: Props) {

  const [devices, setDevices] = useState<WaterDevice[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setEditing] = useState<WaterDevice | null>(null);

  const [nome, setNome] = useState('');
  const [litros, setLitros] = useState('');
  const [horasPorDia, setHorasPorDia] = useState('');

  useEffect(() => {
      fetchDevices();
  }, []);

  const fetchDevices = async () => {
      try {
        const result = await getAllWaterEquipments();
        setDevices(result);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dispositivos.');
      }
  };

  const resetForm = () => {
      setNome('');
      setLitros('');
      setHorasPorDia('');
      setEditing(null);
  }; // reseta os campos do formulário

  const handleSave = async () => {
      const li = Number(litros);
      const h = Number(horasPorDia);
  
      if (!nome.trim() || isNaN(li) || isNaN(h) || li <= 0 || h <= 0) {
        Alert.alert('Erro', 'Preencha todos os campos corretamente.');
        return;
      }
  
      const devicePayload: WaterDevicePayload = {
        name: nome.trim(),
        l: li,
        time: h,
        totalConsum: calcConsumo(li, h),
      };
  
      try {
        if (editing) {
          await updateWaterEquipment(editing.id, devicePayload);
        } else {
          console.log(devicePayload);
          await createWaterEquipment(devicePayload);
        }
  
        fetchDevices();
        resetForm();
        setModalVisible(false);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível salvar o dispositivo.' + error);
      }
    };

    const handleEdit = (device: WaterDevice) => {
        setNome(device.name);
        setLitros(device.l.toString());
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
                await deleteEquipment(id);
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
                    <View style={[GlobalStyles.cardDevice, {backgroundColor: Colors.blueSecondary}]}>
                      <TouchableOpacity onPress={() => handleEdit(item)}>
                        <Text style={{color: Colors.blueDark}}>
                          {item.name} — {isNaN(item.totalConsum) ? 'N/A' : `${item.totalConsum.toFixed(2)} m³/mês`}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleRemove(item.id)}>
                        <Text style={{color: Colors.brownDark}}>Remover</Text>
                      </TouchableOpacity>
                    </View>
                  )}                  
            />
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            >
                <View style={[GlobalStyles.modalView, {borderColor: Colors.blueSecondary}]}>
                    <CenteredView height='60%'>
                        <TextInput 
                            placeholder='Nome'
                            value={nome}
                            onChangeText={setNome}
                            style={[GlobalStyles.inputSimple, {borderColor: Colors.blue}]}
                        />
                        <TextInput
                            placeholder='Fluxo de Água (L/M)'
                            keyboardType="numeric" 
                            value={litros} 
                            onChangeText={setLitros}
                            style={[GlobalStyles.inputSimple, {borderColor: Colors.blue} ]}
                        />
                        <TextInput 
                            placeholder='Média de uso horas/dia'
                            keyboardType="numeric" 
                            value={horasPorDia} 
                            onChangeText={setHorasPorDia}
                            style={[GlobalStyles.inputSimple, {borderColor: Colors.blue}]}
                        />
                    </CenteredView>
                    <View style={GlobalStyles.buttonView}>
                        <ButtonSimple
                            onPress={handleSave}
                            title='Adicionar'
                            backgroundColor={Colors.blue}
                        />
                        <ButtonSimple
                            onPress={() => { resetForm(); setModalVisible(false); }}
                            title='Cancelar'
                            backgroundColor={Colors.blue}
                        />
                    </View>
                </View>
                
            </Modal>
            <CenteredView height='30%'>
                <ButtonSimple
                    onPress={() => setModalVisible(true)}
                    title='Adicionar Novos Dispositivos'
                    backgroundColor={Colors.blue}
                />
            </CenteredView>
        </MainContainer>
        
    );
    
}
