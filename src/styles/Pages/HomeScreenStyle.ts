import { StyleSheet } from "react-native";
import Colors from "../colors";

const HomeScreenStyle = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    card: {
      backgroundColor: '#fff',
      width: '90%',
      borderRadius: 12,
      padding: 20,
      marginVertical: 20,
      elevation: 5,
      shadowColor: '#000',
    },
    label: {
      fontWeight: '600',
      marginTop: 10,
      color: '#555',
    },
    value: {
      fontSize: 16,
      color: '#333',
    },
});

export default HomeScreenStyle;