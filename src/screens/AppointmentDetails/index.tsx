import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import {
    ImageBackground,
    Text,
    View,
    FlatList
} from 'react-native';

import { styles } from "./styles"
import BannerImg from '../../assets/banner.png'
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: "Serasa me Ligou",
            avatar_url: 'https://github.com/Alves-github.png',
            status: 'online'
        },

        {
            id: '2',
            username: "Lunanetuna",
            avatar_url: 'https://pbs.twimg.com/profile_images/1369520968830496768/0mS8t7E4_400x400.jpg',
            status: 'offline'
        }
    ]


    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={'#E51C44'}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos afundar até o Ferro IV, sem ganhar uma partida!
                    </Text>
                </View>

            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 2"
            />

            <FlatList
                style={styles.members}
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    );
}