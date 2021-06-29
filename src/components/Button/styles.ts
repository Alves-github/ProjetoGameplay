import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 56,
        backgroundColor: "#E51C44",
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: '#DDE3F0',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#991F36'
    },
    icon: {
        width: 24,
        height: 18,
    }

});