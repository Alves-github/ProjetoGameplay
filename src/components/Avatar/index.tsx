import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={['#243189', '#1B2565']}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />

        </LinearGradient>
    )
}