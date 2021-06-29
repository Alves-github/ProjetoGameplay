import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 18
    },
    nameStatus: {
        fontFamily: 'Inter_400Regular',
        color: '#ABB1CC',
        fontSize: 13
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    }
});
