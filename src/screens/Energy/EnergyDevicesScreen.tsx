import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import { loadDevicesFromStorageEnergy, saveDevicesToStorageEnergy } from '@/repositories/LocalStorageEnergy';
import Colors from '@/styles/colors';
import GlobalStyles from '@/styles/global';
import { EnergyDevice } from '@/types/EnergyDevice';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = NativeStackScreenProps<EnergyStackParamList, 'EnergiaDispositivos'>;


export default function EnergyDevicesScreen({ navigation }: Props) {

    const [devices, setDevices] = useState<EnergyDevice[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editing, setEditing] = useState<EnergyDevice | null>(null);

    const [nome, setNome] = useState('');
    const [potencia, setPotencia] = useState('');
    const [horasPorDia, setHorasPorDia] = useState('');

    useEffect(() => {
        loadDevices();
    }, []);

    const loadDevices = async () => {
    const saved = await loadDevicesFromStorageEnergy();
    setDevices(saved);
    };

    const resetForm = () => {
        setNome('');
        setPotencia('');
        setHorasPorDia('');
        setEditing(null);
    }; // reseta os campos do formulário

    const calcConsumo = (p: number, h: number) => (p * h * 30) / 1000; // calcula o consumo em kWh/mês

    const saveDevices = () => {
        const newDevice: EnergyDevice = {
          id: editing ? editing.id : Date.now().toString(),
          nome,
          potencia: Number(potencia),
          horasPorDia: Number(horasPorDia),
          consumoMes: calcConsumo(Number(potencia), Number(horasPorDia))
        };
    
        let updatedDevices: EnergyDevice[] = [];
    
        if (editing) {
          updatedDevices = devices.map(item =>
            item.id === editing.id ? newDevice : item
          );
        } else {
          updatedDevices = [...devices, newDevice];
        }
    
        setDevices(updatedDevices);
        saveDevicesToStorageEnergy(updatedDevices);
        resetForm();
        setModalVisible(false);
      };

    const editDevice = (item: EnergyDevice) => {
        setNome(item.nome);
        setPotencia(item.potencia.toString());
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
                saveDevicesToStorageEnergy(updated);
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
                    <View style={[GlobalStyles.cardDevice, {backgroundColor: Colors.yellowSecondary}]}>
                      <TouchableOpacity onPress={() => editDevice(item)}>
                        <Text style={{color: Colors.yellowDark}}>{item.nome} — {item.consumoMes.toFixed(2)} kWh/mês</Text>
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
                <View style={[GlobalStyles.modalView, {borderColor: Colors.yellowSecondary}]}>
                    <CenteredView height='60%'>
                        <TextInput 
                            placeholder='Nome'
                            value={nome}
                            onChangeText={setNome}
                            style={[GlobalStyles.inputSimple, {borderColor: Colors.yellow}]}
                        />
                        <TextInput
                            placeholder='Potência em Watts'
                            keyboardType="numeric" 
                            value={potencia} 
                            onChangeText={setPotencia}
                            style={[GlobalStyles.inputSimple, {borderColor: Colors.yellow} ]}
                        />
                        <TextInput 
                            placeholder='Média de uso horas/dia'
                            keyboardType="numeric" 
                            value={horasPorDia} 
                            onChangeText={setHorasPorDia}
                            style={[GlobalStyles.inputSimple, {borderColor: Colors.yellow}]}
                        />
                    </CenteredView>
                    <View style={GlobalStyles.buttonView}>
                        <ButtonSimple
                            onPress={saveDevices}
                            title='Adicionar'
                            backgroundColor={Colors.yellow}
                        />
                        <ButtonSimple
                            onPress={() => { resetForm(); setModalVisible(false); }}
                            title='Cancelar'
                            backgroundColor={Colors.yellow}
                        />
                    </View>
                </View>
                
            </Modal>
            <CenteredView height='30%'>
                <ButtonSimple
                    onPress={() => setModalVisible(true)}
                    title='Adicionar Novos Dispositivos'
                    backgroundColor={Colors.yellow}
                />
            </CenteredView>
        </MainContainer>
        
    );
    
}
