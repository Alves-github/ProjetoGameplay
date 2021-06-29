import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: '100%',
        height: 234,
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontSize: 28,
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0'
    },
    subtitle: {
        fontSize: 13,
        fontFamily: 'Inter_400Regular',
        color: '#DDE3F0',
        lineHeight: 21
    },
    members: {
        marginLeft: 24,
        marginTop: 27
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    },
})