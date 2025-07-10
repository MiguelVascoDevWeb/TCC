import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import TrashNavigation from '@navigation/TrashNavigation/TrashNavigation';
import { JSX } from 'react/jsx-runtime';
import WaterNavigation from '@navigation/WaterNavigation/WaterNavigation';
import EnergyNavigation from '@navigation/EnergyNavigation/EnergyNavigation';
import ManagementPoluentsScreen from '@screens/Poluents/ManagementPoluentsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootTabParamList } from '@/types/RootTabParamList';
import Colors from '@/styles/colors';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigator(): JSX.Element {
  return (
  
      
<Tab.Navigator
  screenOptions={({ route }) => ({
    //Estilização dos tab navigator
    headerShown: false,
    tabBarActiveTintColor: Colors.white,
    tabBarInactiveTintColor: '#616663',
    tabBarShowLabel: true,
    animation: 'fade',
    tabBarStyle: {
      height:110
    },

    tabBarIcon: ({ focused, color }) => {
      let iconName: string;

      //Icones para cada botão
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Energia') {
        iconName = focused ? 'flash' : 'flash-outline';
      }else if (route.name === 'Água') {
        iconName = focused ? 'water' : 'water-outline';
      }else if (route.name === 'Lixo') {
        iconName = focused ? 'trash' : 'trash-outline'
      }else if (route.name === 'Poluentes') {
        iconName = focused ? 'cloud' : 'cloud-outline'
      }

      return <Ionicons name={iconName} size={30} color={color} />;
    },
    tabBarBackground: () => {
        let TabBarColors = ['#82EAC1', '#65DDAE', Colors.green];

        //Gradientes para cada sessão do app
        if (route.name === 'Energia') {
          TabBarColors = ['#FFE18F','#FFD666', '#EABC3B'];
        }else if (route.name === 'Água') {
          TabBarColors = [Colors.blue, '#66BFFF' , '#3B87EA'];
        }else if (route.name === 'Lixo') {
          TabBarColors = ['#D7AE81', '#DEA669' , Colors.brown];
        }else if (route.name === 'Poluentes') {
          TabBarColors = ['#D09EEB', '#C780EE' , Colors.purple];
        }

        return (
          <LinearGradient
            colors={TabBarColors}
            locations={[0 , 0.39, 1]}
            style={{ flex: 1}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        )
      },
  })}
>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Energia" component={EnergyNavigation} />
        <Tab.Screen name="Poluentes" component={ManagementPoluentsScreen} />
        <Tab.Screen name="Lixo" component={TrashNavigation} />
        <Tab.Screen name="Água" component={WaterNavigation} />
      </Tab.Navigator>

    
  );  
}
