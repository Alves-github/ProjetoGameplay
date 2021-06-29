import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    content: {
        flex: 1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 18
    },
    category: {
        fontFamily: 'Inter_400Regular',
        color: '#ABB1CC',
        fontSize: 13,
        marginRight: 24
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontFamily: 'Inter_500Medium',
        color: '#DDE3F0',
        fontSize: 13,
        marginLeft: 7
    },
    player: {
        fontFamily: 'Inter_500Medium',
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    },
    guildIconContainer: {
        height: 68,
        width: 64,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
});