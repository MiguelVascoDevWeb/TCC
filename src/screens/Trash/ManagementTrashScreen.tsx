import { TrashStackParamList } from '@/types/TrashStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<TrashStackParamList, 'LixoGerenciamento'>;

export default function ManagementTrashScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Gerenciamento de Lixo</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('LixoTexto')}
            >
                <Text>Textos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ComoDescartar')}
            >
                <Text>Como descartar?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Mapa')}
            >
                <Text>Onde descartar?</Text>
            </TouchableOpacity>
        </View>
    );
}