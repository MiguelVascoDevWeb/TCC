import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WaterStackParamList } from '@/types/WaterStackParamList';
import MainContainer from '@/components/MainContainer';
import CenteredView from '@/components/CenteredView';
import ButtonSimple from '@/components/ButtonSimple';
import Colors from '@/styles/colors';

type Props = NativeStackScreenProps<WaterStackParamList, 'AguaGerenciamento'>;

export default function ManagementWaterScreen({ navigation }: Props) {
    return (
        <MainContainer>
            <CenteredView>
                <ButtonSimple
                    onPress={() => navigation.navigate('AguaDispositivos')}
                    title={'Editar Dispositivos'}
                    backgroundColor= {Colors.blue}
                />
                <ButtonSimple
                    onPress={() => navigation.navigate('AguaTexto')}
                    title='Sobre a Água'
                    backgroundColor={Colors.blue}
                />
            </CenteredView>
        </MainContainer>
    );
}