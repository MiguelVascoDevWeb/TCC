import { StyleSheet } from "react-native";

const LandingScreenStyle = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: '#FAFEFC',
    },

    viewTop: {
        alignItems: 'center',
        justifyContent:'center',
        height:'70%',

    },

    viewBottom: {
        alignItems: 'center',
        justifyContent:'center',
        height:'30%',
        elevation: 5
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal:70,
        borderRadius: 25,
        backgroundColor: '#41D499',
        marginVertical: 5,
    },
    
    buttonText: {
        color: '#FAFEFC'
    }
})

export default LandingScreenStyle;