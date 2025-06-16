import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import ManagementEnergyStyle from '@/styles/Pages/ManagementEnergyStyle';
import { SafeAreaView, SafeAreaProvider  } from 'react-native-safe-area-context';
import GlobalStyles from '@/styles/global';

type Props = NativeStackScreenProps<EnergyStackParamList, 'Energia'>;


export default function ManagementEnergyScreen({ navigation }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        
        <View style={ManagementEnergyStyle.container}>
            <TouchableOpacity
                style={[GlobalStyles.button, GlobalStyles.green]}
                onPress={() => navigation.navigate('EnergiaDispositivos')}>
                <Text style={GlobalStyles.buttonText}>Editar Dispositivos</Text>
            </TouchableOpacity>
        </View>
    );
    
}
