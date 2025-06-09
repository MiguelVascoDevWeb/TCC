import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/navigation/StackNavigation';

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

const style = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: '#FAFEFC',
    },

    viewTop: {
        alignItems: 'center',
        justifyContent:'center',
        height:'70%',

    },

    viewBottom: {
        alignItems: 'center',
        justifyContent:'center',
        height:'30%',
        elevation: 5
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal:70,
        borderRadius: 25,
        backgroundColor: '#41D499',
        marginVertical: 5,
    },
    
    buttonText: {
        color: '#FAFEFC'
    }

    

})