import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 360,
        width: '100%',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: '#DDE3F0',
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: 'Rajdhani_700Bold',
        lineHeight: 40
    },
    subtitle: {
        color: '#DDE3F0',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
        fontFamily: 'Rajdhani_500Medium',
        lineHeight: 25,
    },
});