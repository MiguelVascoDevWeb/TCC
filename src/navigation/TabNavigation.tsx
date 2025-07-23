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
import NavigationGradient from '@/components/NavigationGradient';
import { ColorValue } from 'react-native';

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
          height:110,
          boxShadow: '0px -5px 5px rgba(0, 0, 0, 0.1)',
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
          }else {
            iconName = 'bug';
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarBackground: () => {
            let TabBarColors: readonly [ColorValue, ColorValue, ...ColorValue[]];

            //Gradientes para cada sessão do app
            if (route.name === 'Energia') {
              TabBarColors = ['#FFE18F','#FFD666', '#EABC3B'];
            }else if (route.name === 'Água') {
              TabBarColors = [Colors.blue, '#66BFFF' , '#3B87EA'];
            }else if (route.name === 'Lixo') {
              TabBarColors = ['#D7AE81', '#DEA669' , Colors.brown];
            }else if (route.name === 'Poluentes') {
              TabBarColors = ['#D09EEB', '#C780EE' , Colors.purple];
            }else {
              TabBarColors = ['#82EAC1', '#65DDAE', Colors.green];
            }

            return (
              <NavigationGradient gradientColors={TabBarColors}
              />
            )
          },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Energia" component={EnergyNavigation} options={{lazy: false}}/>
      <Tab.Screen name="Poluentes" component={ManagementPoluentsScreen}/>
      <Tab.Screen name="Lixo" component={TrashNavigation} options={{lazy: false}} />
      <Tab.Screen name="Água" component={WaterNavigation} options={{lazy: false}} />
    </Tab.Navigator>

    /*{'lazy : false}' é utilizado para carregar as páginas ao carregar o tab, evitando erros de navegação */
  );  
}
