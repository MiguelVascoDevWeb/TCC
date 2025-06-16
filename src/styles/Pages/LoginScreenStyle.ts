import { StyleSheet } from "react-native"

const LoginScreenStyle = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: '#FAFEFC'
    },

    viewTop: {
        alignItems: 'center',
        justifyContent:'center',
        height:'60%',

    },

    viewBottom: {
        alignItems: 'center',
        justifyContent:'center',
        height:'40%',
    },

    viewBack: {
    alignItems: 'flex-start',
    justifyContent:'flex-start',
  },

    buttonBack: {
        margin: 5,
        marginLeft: 10,
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius: 25,
        backgroundColor: '#41D499',
    },

    buttonC: {
        paddingVertical: 10,
        paddingHorizontal:70,
        borderRadius: 25,
        backgroundColor: '#41D499',
        marginVertical: 5,
    },

    buttonR: {
        color: 'green',
    },

    buttonCText: {
        color: '#FAFEFC'
    },

    buttonRText: {
        color: '#41D499'
    },

    label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#1D6B3D',
    padding: 10,
    marginTop: 6,
    marginBottom: 12,
    fontSize: 16,
    color: '#1D6B3D',
  },

})

export default LoginScreenStyle;