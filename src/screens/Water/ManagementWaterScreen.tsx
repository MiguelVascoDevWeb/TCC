import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WaterStackParamList } from '../../navigation/WaterNavigation/WaterNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<WaterStackParamList, 'Agua'>;

export default function ManagementWaterScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Gerenciamento de Água</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('AguaTexto')}
            >
                <Text>Botaokk</Text>
            </TouchableOpacity>
        </View>
    );
}