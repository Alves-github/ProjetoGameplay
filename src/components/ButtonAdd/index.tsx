import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import { styles } from './styles';

export function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={'#DDE3F0'}
                size={24}
            />

        </RectButton>
    )
}