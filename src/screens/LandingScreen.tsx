import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/RootStackParamList';
import style from '@styles/Pages/LandingScreenStyle';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingScreen({ navigation }: Props) {

    return(
        <View style={style.container}>
            <LinearGradient 
                colors={['#41D499', '#82EAC1']} start={{ x: 0, y: 0.75 }} end={{x: 0, y: 0.99}} 
                style={style.viewTop}
            >
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{width: 50, height: 50}} />
            </LinearGradient>
            <View style={style.viewBottom}>
                <TouchableOpacity style={style.button} 
                    onPress={() => navigation.navigate('LogIn')}
                >
                    <Text style={style.buttonText}>Continuar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={style.buttonText} >Cadastro</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

