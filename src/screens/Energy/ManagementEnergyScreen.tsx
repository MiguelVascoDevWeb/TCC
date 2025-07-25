import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import Colors from '@/styles/colors';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

type Props = NativeStackScreenProps<EnergyStackParamList, 'EnergiaGerenciamento'>;


export default function ManagementEnergyScreen({ navigation }: Props) {

    return (
        <MainContainer>
            <CenteredView>
                <ButtonSimple
                    onPress={() => navigation.navigate('EnergiaDispositivos')}
                    title={'Editar Dispositivos'}
                    backgroundColor= {Colors.yellow}
                />
                <ButtonSimple
                    onPress={() => navigation.navigate('EnergiaTexto')}
                    title={'Sobre a Energia'}
                    backgroundColor={Colors.yellow}
                />
            </CenteredView>
        </MainContainer>
    );
    
}
