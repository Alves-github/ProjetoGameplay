import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from "./style";

type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={['#0E1647', '#0A1033']}
        >
            {children}
        </LinearGradient>
    )
}