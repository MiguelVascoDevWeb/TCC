import Colors from "@/styles/colors";
import TextCardStyle from "@/styles/Components/TextCardStyle";
import React, { useRef, useState } from "react";
import { View, Image, TextProps, Text, ViewProps, ImageProps, TouchableOpacity, Animated, LayoutAnimation, Easing } from "react-native";
import Title from "./Title";

interface TextCardProps extends ViewProps{
    backgroundColor?: string;
    textColor?: string;
    textStyle?: TextProps['style'];
    imageStyle?: ImageProps['style']
    children?: React.ReactNode;
    image: string;
    title: string;

    onPressButton?: () => void ;
    buttonTitle?: string;
    displayButton?: "none" | undefined; //para esconder o botão, se necessário
}  

const TextCard: React.FC<TextCardProps> = ({
  backgroundColor = Colors.greenSecondary, 
  textColor = Colors.greenDark, 
  children, 
  textStyle = TextCardStyle.FText, 
  imageStyle = TextCardStyle.imgInText,
  image, 
  title,

  onPressButton,
  buttonTitle,
  displayButton,
  ...rest
}) => {
  // Estado para controlar a expansão do card
  const [expanded, setExpanded] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  // Função para alternar a expansão do card com animação da seta
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const toValue = expanded ? 0 : 1;

    Animated.timing(rotation, {
      toValue,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    setExpanded(!expanded);
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  // Estilizar os children, se forem Text ou Image
    const styledChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === Text) {
      return React.cloneElement(child as React.ReactElement<TextProps>, {
        style: [textStyle, {color: textColor}]
      });
    }
    else if (React.isValidElement(child) && child.type === Image) {
      return React.cloneElement(child as React.ReactElement<ImageProps>, {
        style: [imageStyle]
      });
    }
    return child;
  });

    return (
        <View style={[TextCardStyle.textbox, {backgroundColor}]}>
            <View style={TextCardStyle.imgContainer}>
                <Image source={{uri: image}} style={TextCardStyle.imgMain}/>
            </View>
            <Title style={TextCardStyle.Title} color={textColor} >
                {title}
            </Title>
              {/* Mostrar conteúdo somente se expandido */}
              {expanded && styledChildren}

              {/* Botão de expansão com seta */}
              {children && (
                <TouchableOpacity
                  onPress={toggleExpand}
                  accessibilityLabel={expanded ? "Recolher texto" : "Expandir texto"}
                >
                  <Animated.Text style={[TextCardStyle.expandButtonText, animatedStyle, {color: textColor}]}>
                    ↓
                  </Animated.Text>
                </TouchableOpacity>
              )}
            <TouchableOpacity
              onPress={onPressButton}
              style={[TextCardStyle.cardButton, {display: displayButton}]}
            >
              <Text style={TextCardStyle.cardButtonText}>
                {buttonTitle}
              </Text>
            </TouchableOpacity>
        </View>
    );

};

export default TextCard;