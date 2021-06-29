import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {
    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={['#243189', '#1B2565']}
            >
                <LinearGradient style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                    colors={[checked ? '171F52' : '#243189', '#1D2766']}
                >
                    {
                        hasCheckBox &&
                        <View style={checked ? styles.checked : styles.check} />
                    }
                    <Icon
                        width={48}
                        height={48}
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}