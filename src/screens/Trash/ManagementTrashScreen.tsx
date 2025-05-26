import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../navigation/StackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Lixo'>;

export default function ManagementTrashScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Gerenciamento de Lixo</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LixoTexto')}
                >
                    <Text>Botao</Text>
                </TouchableOpacity>
        </View>
    );
}