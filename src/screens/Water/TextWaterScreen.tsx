import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import TextScreensStyle from '@/styles/Pages/TextScreensStyle';
import Title from '@/components/Title';
import Colors from '@/styles/colors';


export default function TextEnergyScreen() {
  return (
    <ScrollView contentContainerStyle={TextScreensStyle.container}>
      <View style={[TextScreensStyle.textbox, {backgroundColor: Colors.blueSecondary}]}>
        <Title style={TextScreensStyle.Title} color={Colors.blueDark}>
          Titulo 1
        </Title>
        <Text style={TextScreensStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
      <View style={[TextScreensStyle.textbox, {backgroundColor: Colors.blueSecondary}]}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={TextScreensStyle.Img}/>
        <Text style={TextScreensStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
      <View style={[TextScreensStyle.textbox, {backgroundColor: Colors.blueSecondary}]}>
        <Title style={TextScreensStyle.Title} color={Colors.blueDark}>
          Titulo 2
        </Title>
        <Text style={TextScreensStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={TextScreensStyle.Img}/>
        <Text style={TextScreensStyle.FText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris vel elit congue ullamcorper. Fusce feugiat dictum tempor. Praesent quis dui ultricies, feugiat elit at, facilisis augue. Nulla sodales ante lacus, id eleifend nisl bibendum nec. Cras arcu metus, ullamcorper eget ligula nec, lobortis pulvinar 
        </Text>
      </View>
    </ScrollView>
  );
}
