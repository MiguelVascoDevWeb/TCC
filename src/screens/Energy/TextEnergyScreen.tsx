import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import TextEnergyStyle from '@/styles/Pages/TextEnergyStyle';

export default function TextEnergyScreen() {
  return (
    <ScrollView contentContainerStyle={TextEnergyStyle.container}>
      <View style={TextEnergyStyle.textbox}>
        <Text style={TextEnergyStyle.Title}>
            Texto 1
        </Text>
        <Text style={TextEnergyStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
      <View style={TextEnergyStyle.textbox}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={TextEnergyStyle.Img}/>
        <Text style={TextEnergyStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
      <View style={TextEnergyStyle.textbox}>
      <Text style={TextEnergyStyle.Title}>
            Texto 2
        </Text>
        <Text style={TextEnergyStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={TextEnergyStyle.Img}/>
        <Text style={TextEnergyStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
    </ScrollView>
  );
}
