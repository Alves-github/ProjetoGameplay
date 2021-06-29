import React from "react";

import {
    View,
    FlatList
} from 'react-native';
import { Guild } from "../../components/Guild";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";
import { GuildProps } from "../../components/Guild";





type Props = {
    handleGuildSelect(guild: GuildProps): void;
}



export function Guilds({ handleGuildSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: "League Of Legends",
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: "GTA RP",
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: "Counter Strike",
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: "Valorant",
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: "Valorant",
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: "Valorant",
            icon: 'image.png',
            owner: true
        },
    ];

    return (

        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                ListHeaderComponent={() => <ListDivider isCentered />}

                style={styles.guilds} />
        </View>
    );
}