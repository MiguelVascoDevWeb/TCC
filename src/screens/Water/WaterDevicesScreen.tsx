import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import { calcConsumo } from '@/repositories/calcConsumo';
import { loadDevicesFromStorageWater, saveDevicesToStorageWater } from '@/repositories/LocalStorageWater';
import Colors from '@/styles/colors';
import GlobalStyles from '@/styles/global';
import { WaterDevice } from '@/types/WaterDevice';
import { WaterStackParamList } from '@/types/WaterStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = NativeStackScreenProps<WaterStackParamList, 'AguaDispositivos'>;


export default function EnergyDevicesScreen({ navigation }: Props) {

    const [devices, setDevices] = useState<WaterDevice[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editing, setEditing] = useState<WaterDevice | null>(null);

    const [nome, setNome] = useState('');
    const [litros, setLitros] = useState('');
    const [horasPorDia, setHorasPorDia] = useState('');

    useEffect(() => {
        loadDevices();
    }, []);

    const loadDevices = async () => {
    const saved = await loadDevicesFromStorageWater();
    setDevices(saved);
    };

    const resetForm = () => {
        setNome('');
        setLitros('');
        setHorasPorDia('');
        setEditing(null);
    }; // reseta os campos do formulário

    const saveDevices = () => {
        const newDevice: WaterDevice = {
          id: editing ? editing.id : Date.now().toString(),
          nome,
          litros: Number(litros),
          horasPorDia: Number(horasPorDia),
          consumoMes: calcConsumo(Number(litros), Number(horasPorDia))
        };
    
        let updatedDevices: WaterDevice[] = [];
    
        if (editing) {
          updatedDevices = devices.map(item =>
            item.id === editing.id ? newDevice : item
          );
        } else {
          updatedDevices = [...devices, newDevice];
        }
    
        setDevices(updatedDevices);
        saveDevicesToStorageWater(updatedDevices);
        resetForm();
        setModalVisible(false);
      };

    const editDevice = (item: WaterDevice) => {
        setNome(item.nome);
        setLitros(item.litros.toString());
        setHorasPorDia(item.horasPorDia.toString());
        setEditing(item);
        setModalVisible(true);
    };

    const removeDevice = (id: string) => {
        Alert.alert(
          'Remover dispositivo',
          'Tem certeza que deseja remover este dispositivo?',
          [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'Remover',
              style: 'destructive',
              onPress: () => {
                const updated = devices.filter(device => device.id !== id);
                setDevices(updated);
                saveDevicesToStorageWater(updated);
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
                      <TouchableOpacity onPress={() => editDevice(item)}>
                        <Text style={{color: Colors.blueDark}}>{item.nome} — {item.consumoMes.toFixed(2)} m³/mês</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => removeDevice(item.id)}>
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
                            onPress={saveDevices}
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
