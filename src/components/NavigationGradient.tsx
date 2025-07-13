import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ColorValue } from "react-native";

interface NavigationGradientProps {
    gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

const NavigationGradient: React.FC<NavigationGradientProps> = ({gradientColors}) => {
    return (
        <LinearGradient
        colors= {gradientColors}
        locations={[0 , 0.39, 1]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        />
    );
};

export default NavigationGradient;

