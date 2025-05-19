import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingScreen({ navigation }: Props) {

    return(
        <View>
            <Text>Landing</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('LogIn')}
            >
                <Text>Botao</Text>
            </TouchableOpacity>
        </View>
    );
}