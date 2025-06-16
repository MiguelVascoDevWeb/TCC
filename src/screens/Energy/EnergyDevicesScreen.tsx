import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import ManagementEnergyStyle from '@/styles/Pages/ManagementEnergyStyle';
import { SafeAreaView, SafeAreaProvider  } from 'react-native-safe-area-context';
import GlobalStyles from '@/styles/global';

type Props = NativeStackScreenProps<EnergyStackParamList, 'EnergiaDispositivos'>;


export default function EnergyDevicesScreen({ navigation }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={ManagementEnergyStyle.container}>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                    <View>
                        <Text >Hello World!</Text>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text>Hide Modal</Text>
                        </Pressable>
                    </View>
                </Modal>
                <TouchableOpacity
                style={[GlobalStyles.button, GlobalStyles.green]}
                onPress={() => setModalVisible(true)}>
                <Text style={GlobalStyles.buttonText}>Show Modal</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    );
    
}
