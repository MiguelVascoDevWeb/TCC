import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { EnergyStackParamList } from '../../navigation/EnergyNavigation/EnergyNavigation';

type Props = NativeStackScreenProps<EnergyStackParamList, 'Energia'>;


export default function ManagementEnergyScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Gerenciamento de Energia</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('EnergiaTexto')}
            >
                <Text>Botaokk</Text>
            </TouchableOpacity>
        </View>
    );
    
}
