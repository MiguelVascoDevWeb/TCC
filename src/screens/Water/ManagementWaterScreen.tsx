import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WaterStackParamList } from '@/types/WaterStackParamList';

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