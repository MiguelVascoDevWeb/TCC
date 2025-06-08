import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/navigation/StackNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingScreen({ navigation }: Props) {

    return(
        <View style={style.container}>
            <View style={style.viewTop}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{width: 50, height: 50}} />
            </View>
            <View style={style.viewBottom}>
                <TouchableOpacity style={style.button} 
                    onPress={() => navigation.navigate('LogIn')}
                >
                    <Text>Continuar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        height:'100%'
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
    },

    button: {
        backgroundColor: 'green',
    }

    

})