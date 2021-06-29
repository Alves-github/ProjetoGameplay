import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

type Props = {

}

export function GuildIcon() {
    const uri = 'https://i.pinimg.com/originals/92/7c/5a/927c5a9ec80ee98a7a772b5335d305e8.png';

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode='cover'
        />
    )
}