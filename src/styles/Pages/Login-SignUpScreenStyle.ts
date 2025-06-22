import { StyleSheet } from "react-native";
import Colors from "../colors";

const LoginSignUpScreenStyle = StyleSheet.create({

    viewBack: {
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        height: '10%'
    },

    buttonBack: {
        marginTop: 40,
        marginLeft: 10,
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius: 25,
        backgroundColor: Colors.green,
    },

    buttonForgotText: {
        color: Colors.green
    },

})

export default LoginSignUpScreenStyle;