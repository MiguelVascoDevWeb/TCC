import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TrashStackParamList } from '../../navigation/TrashNavigation/TrashNavigation';

type Props = NativeStackScreenProps<TrashStackParamList, 'Lixo'>;

export default function ManagementTrashScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Gerenciamento de Lixo</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LixoTexto')}
                >
                    <Text>Botaokk</Text>
                </TouchableOpacity>
        </View>
    );
}