import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigation';


type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export default function LogInScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Login</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Botao</Text>
                </TouchableOpacity>
        </View>
    );
}