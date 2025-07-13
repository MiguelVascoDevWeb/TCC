import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import Colors from '@/styles/colors';
import { TrashStackParamList } from '@/types/TrashStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<TrashStackParamList, 'LixoGerenciamento'>;

export default function ManagementTrashScreen({ navigation }: Props) {
    return (
        <MainContainer>
            <CenteredView>
                <ButtonSimple
                    onPress={() => navigation.navigate('ComoDescartar')}
                    title='Como Descartar?'
                    backgroundColor={Colors.brown}
                />
                                <ButtonSimple
                    onPress={() => navigation.navigate('Mapa')}
                    title='Onde Descartar?'
                    backgroundColor={Colors.brown}
                />
                                <ButtonSimple
                    onPress={() => navigation.navigate('LixoTexto')}
                    title='Sobre o Lixo'
                    backgroundColor={Colors.brown}
                />
            </CenteredView>
        </MainContainer>
    );
}