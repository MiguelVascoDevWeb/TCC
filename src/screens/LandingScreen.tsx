import ButtonSimple from '@/components/ButtonSimple';
import CenteredView from '@/components/CenteredView';
import MainContainer from '@/components/MainContainer';
import { RootStackParamList } from '@/types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import style from '@styles/Pages/LandingScreenStyle';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function LandingScreen({ navigation }: Props) {

    return(
        <MainContainer>
            <LinearGradient 
                colors={['#41D499', '#82EAC1']} start={{ x: 0, y: 0.75 }} end={{x: 0, y: 0.99}} 
                style={style.viewTop}
            >
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{width: 50, height: 50}} />
            </LinearGradient>
            <CenteredView height={'30%'}>
                <ButtonSimple
                    title='Continuar' 
                    onPress={() => navigation.navigate('LogIn')} 
                />
                <ButtonSimple
                    title='Cadastro' 
                    onPress={() => navigation.navigate('SignUp')} 
                />
                
            </CenteredView>
        </MainContainer>
    );
}

