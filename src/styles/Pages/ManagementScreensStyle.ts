import { StyleSheet } from "react-native";

const ManagementScreensStyle = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 14,
        color: '#333',
        marginTop: 6,
    },
    icon: {
        marginBottom: 10,
    },
    historyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    historyBox: {
        width: 100,
        height: 80,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#f9f9f9',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        width: '100%',
        padding: 6,
        marginTop: 4,
        textAlign: 'center',
        fontSize: 14,
    },
    boxLabel: {
        fontSize: 12,
        textAlign: 'center',
    },
    historyX: {
        fontSize: 24,
        marginHorizontal: 10,
    },
    historyIndicator: {
        marginTop: 12,
        fontSize: 13,
        color: '#555',
        fontWeight: '600',
    },
});

export default ManagementScreensStyle;