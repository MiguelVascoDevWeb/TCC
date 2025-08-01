import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import Colors from '@/styles/colors';
import { WaterStackParamList } from '@/types/WaterStackParamList';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {Text, TextInput, View } from 'react-native';
import ManagementScreensStyle from '@/styles/Pages/ManagementScreensStyle';

type Props = NativeStackScreenProps<WaterStackParamList, 'AguaGerenciamento'>;

export default function ManagementEnergyScreen({ navigation }: Props) {
    const [mesAnterior, setMesAnterior] = useState('');
    const [mesAtual, setMesAtual] = useState('');

    const valorAnterior = parseFloat(mesAnterior);
    const valorAtual = parseFloat(mesAtual);

    let comparacao = '';
    if (!isNaN(valorAnterior) && !isNaN(valorAtual)) {
        if (valorAtual > valorAnterior) {
            comparacao = '🔺 Houve um aumento no consumo.';
        } else if (valorAtual < valorAnterior) {
            comparacao = '🔻 Houve uma redução no consumo.';
        } else {
            comparacao = '⏸️ O consumo se manteve igual.';
        }
    }

    return (
        <MainContainer>
            <CenteredView>

                {/* CARD MONITORAMENTO */}
                <View style={[ManagementScreensStyle.card, {borderColor: Colors.blue}]}>
                    <Text style={[ManagementScreensStyle.cardTitle, {color: Colors.blueDark}]}>Monitoramento [Local]</Text>
                    <Ionicons name="bar-chart" size={30} color={Colors.blue} style={ManagementScreensStyle.icon} />
                    <Text style={[ManagementScreensStyle.cardText, {color: Colors.blueDark}]}>Texto Gasto [ml]</Text>
                    <Text style={[ManagementScreensStyle.cardText, {color: Colors.blueDark}]}>Texto Gasto [R$]</Text>
                </View>

                {/* CARD HISTÓRICO */}
                <View style={[ManagementScreensStyle.card, {borderColor: Colors.blue}]}>
                    <Text style={[ManagementScreensStyle.cardTitle, {color: Colors.blueDark}]}>Histórico</Text>
                    <View style={ManagementScreensStyle.historyRow}>
                        <View style={ManagementScreensStyle.historyBox}>
                            <Text style={[ManagementScreensStyle.boxLabel, {color: Colors.blueDark}]}>Mês Anterior</Text>
                            <TextInput
                                style={ManagementScreensStyle.input}
                                keyboardType="numeric"
                                placeholder="0"
                                value={mesAnterior}
                                onChangeText={setMesAnterior}
                            />
                        </View>
                        <Text style={[ManagementScreensStyle.historyX, {color: Colors.blueDark}]}>×</Text>
                        <View style={ManagementScreensStyle.historyBox}>
                            <Text style={[ManagementScreensStyle.boxLabel, {color: Colors.blueDark}]}>Mês Atual</Text>
                            <TextInput
                                style={ManagementScreensStyle.input}
                                keyboardType="numeric"
                                placeholder="0"
                                value={mesAtual}
                                onChangeText={setMesAtual}
                            />
                        </View>
                    </View>
                    <Text style={[ManagementScreensStyle.historyIndicator, {color: Colors.blueDark}]}>{comparacao || '⇅ Redução ou Aumento'}</Text>
                </View>

                {/* BOTÕES */}
                <ButtonSimple
                    onPress={() => navigation.navigate('AguaDispositivos')}
                    title={'Editar Dispositivos'}
                    backgroundColor={Colors.blue}
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

