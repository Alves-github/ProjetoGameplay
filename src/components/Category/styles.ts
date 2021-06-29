import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    title: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 15,
        marginTop: 15,
    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: '#0A1033',

        borderColor: '#243189',
        borderWidth: 2,
        borderRadius: 3
    },
    checked: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: '#E51C44',

        borderRadius: 3
    }

})