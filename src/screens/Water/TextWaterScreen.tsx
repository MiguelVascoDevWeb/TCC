import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import TextWaterStyle from '@/styles/Pages/TextWaterStyle';

export default function TextWaterScreen() {
  return (
    <ScrollView contentContainerStyle={TextWaterStyle.container}>
      <View style={TextWaterStyle.textbox}>
        <Text style={TextWaterStyle.Title}>
            Texto 1
        </Text>
        <Text style={TextWaterStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
      <View style={TextWaterStyle.textbox}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={TextWaterStyle.Img}/>
        <Text style={TextWaterStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
      <View style={TextWaterStyle.textbox}>
      <Text style={TextWaterStyle.Title}>
            Texto 2
        </Text>
        <Text style={TextWaterStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={TextWaterStyle.Img}/>
        <Text style={TextWaterStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
    </ScrollView>
  );
}
