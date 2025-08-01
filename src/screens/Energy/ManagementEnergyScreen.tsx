import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import Colors from '@/styles/colors';
import { EnergyStackParamList } from '@/types/EnergyStackParamList';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import ManagementScreensStyle from '@/styles/Pages/ManagementScreensStyle';

type Props = NativeStackScreenProps<EnergyStackParamList, 'EnergiaGerenciamento'>;

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
                <View style={[ManagementScreensStyle.card, {borderColor: Colors.yellow}]}>
                    <Text style={[ManagementScreensStyle.cardTitle, {color: Colors.yellowDark}]}>Monitoramento [Local]</Text>
                    <Ionicons name="bar-chart" size={30} color={Colors.yellow} style={ManagementScreensStyle.icon} />
                    <Text style={[ManagementScreensStyle.cardText, {color: Colors.yellowDark}]}>Texto Gasto [Watts]</Text>
                    <Text style={[ManagementScreensStyle.cardText, {color: Colors.yellowDark}]}>Texto Gasto [R$]</Text>
                </View>

                {/* CARD HISTÓRICO */}
                <View style={[ManagementScreensStyle.card, {borderColor: Colors.yellow}]}>
                    <Text style={[ManagementScreensStyle.cardTitle, {color: Colors.yellowDark}]}>Histórico</Text>
                    <View style={ManagementScreensStyle.historyRow}>
                        <View style={ManagementScreensStyle.historyBox}>
                            <Text style={[ManagementScreensStyle.boxLabel, {color: Colors.yellowDark}]}>Mês Anterior</Text>
                            <TextInput
                                style={ManagementScreensStyle.input}
                                keyboardType="numeric"
                                placeholder="0"
                                value={mesAnterior}
                                onChangeText={setMesAnterior}
                            />
                        </View>
                        <Text style={[ManagementScreensStyle.historyX, {color: Colors.yellowDark}]}>×</Text>
                        <View style={ManagementScreensStyle.historyBox}>
                            <Text style={[ManagementScreensStyle.boxLabel, {color: Colors.yellowDark}]}>Mês Atual</Text>
                            <TextInput
                                style={ManagementScreensStyle.input}
                                keyboardType="numeric"
                                placeholder="0"
                                value={mesAtual}
                                onChangeText={setMesAtual}
                            />
                        </View>
                    </View>
                    <Text style={[ManagementScreensStyle.historyIndicator, {color: Colors.yellowDark}]}>{comparacao || '⇅ Redução ou Aumento'}</Text>
                </View>

                {/* BOTÕES */}
                <ButtonSimple
                    onPress={() => navigation.navigate('EnergiaDispositivos')}
                    title={'Editar Dispositivos'}
                    backgroundColor={Colors.yellow}
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


