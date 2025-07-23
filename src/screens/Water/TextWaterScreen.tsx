import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import TextScreensStyle from '@/styles/Components/TextCardStyle';
import Title from '@/components/Title';
import Colors from '@/styles/colors';
import GlobalStyles from '@/styles/global';
import TextCard from '@/components/TextCard';


export default function TextEnergyScreen() {
  return (
    <ScrollView contentContainerStyle={GlobalStyles.scrollViewContainer}>
      <TextCard
        title='Titulo Muito Massa'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys_mniGFFu4CRmTbqEi4m0B-OJEONm4OMVw&s'
        textColor={Colors.blueDark}
        backgroundColor={Colors.blueSecondary}
        displayButton="none"
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor vel magna tincidunt cursus. Nam arcu massa, rutrum vel posuere ornare, consequat id dolor. Vestibulum pharetra dui magna, a sollicitudin libero gravida eleifend.
        </Text>
        <Text>
          Phasellus ut justo id elit vulputate elementum. Suspendisse tempus dolor tempus maximus lacinia. Vivamus varius dignissim tortor, sit amet semper ex auctor ut. Pellentesque pellentesque odio iaculis pharetra consequat. Phasellus vitae posuere magna. Vivamus vehicula velit nec maximus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nisi massa, congue a pulvinar quis, tincidunt sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam luctus ac ipsum vel volutpat.
        </Text>
        <Image source={{uri: 'https://www.portalsolar.com.br/_next/image?url=https%3A%2F%2Fd3csixunm0sjcw.cloudfront.net%2Fwp-content%2Fuploads%2F2021%2F03%2F23170447%2Fenergia-verde.jpg&w=3840&q=100'}}/>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor vel magna tincidunt cursus. Nam arcu massa, rutrum vel posuere ornare, consequat id dolor. Vestibulum pharetra dui magna, a sollicitudin libero gravida eleifend. Phasellus ut justo id elit vulputate elementum. Suspendisse tempus dolor tempus maximus lacinia. Vivamus varius dignissim tortor, sit amet semper ex auctor ut. Pellentesque pellentesque odio iaculis pharetra consequat. Phasellus vitae posuere magna. Vivamus vehicula velit nec maximus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nisi massa, congue a pulvinar quis, tincidunt sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam luctus ac ipsum vel volutpat.
        </Text>

      </TextCard>

      <TextCard
        title='Titulo Muito Massa'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys_mniGFFu4CRmTbqEi4m0B-OJEONm4OMVw&s'
        textColor={Colors.blueDark}
        backgroundColor={Colors.blueSecondary}
        displayButton='none'
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor vel magna tincidunt cursus. Nam arcu massa, rutrum vel posuere ornare, consequat id dolor. Vestibulum pharetra dui magna, a sollicitudin libero gravida eleifend.
        </Text>
        <Text>
          Phasellus ut justo id elit vulputate elementum. Suspendisse tempus dolor tempus maximus lacinia. Vivamus varius dignissim tortor, sit amet semper ex auctor ut. Pellentesque pellentesque odio iaculis pharetra consequat. Phasellus vitae posuere magna. Vivamus vehicula velit nec maximus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nisi massa, congue a pulvinar quis, tincidunt sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam luctus ac ipsum vel volutpat.
        </Text>
        <Image source={{uri: 'https://www.portalsolar.com.br/_next/image?url=https%3A%2F%2Fd3csixunm0sjcw.cloudfront.net%2Fwp-content%2Fuploads%2F2021%2F03%2F23170447%2Fenergia-verde.jpg&w=3840&q=100'}}/>

      </TextCard>
    </ScrollView>
  );
}
