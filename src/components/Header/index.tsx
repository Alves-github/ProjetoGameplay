import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { View, Text } from 'react-native';
import { styles } from './styles'


type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={['#0A1033', '#1D2766']}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name='arrow-left'
                    size={24}
                    color={'#ABB1CC'}
                />

            </BorderlessButton>

            <Text style={styles.title}
            >
                {title}
            </Text>

            {
                action
                    ?
                    <View>
                        {action}
                    </View>
                    :
                    <View style={{ width: 24 }} />
            }

        </LinearGradient>
    );
}