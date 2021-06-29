import React, { useState } from "react";
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

import {
    Text,
    View,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';

import { styles } from "./styles"
import { ModalView } from '../../components/ModalView';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { GuildProps } from "../../components/Guild";
import { Background } from "../../components/Background";




export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);


    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseModal() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected)
        setOpenGuildsModal(false);
    }

    return (
        <KeyboardAvoidingView

            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>

                    <Header
                        title="Agendar Partida"
                    />
                    <Text style={[styles.label,
                    { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon ? <GuildIcon /> :
                                        <View style={styles.image} />

                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ?
                                            guild.name : "Selecione um Servidor"}
                                    </Text>
                                </View>

                                <Feather
                                    name={"chevron-right"}
                                    color={'#DDE3F0'}
                                    size={18}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Hora e minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}>
                            <Button
                                title={"Agendar"}
                            />
                        </View>
                    </View>
                </ScrollView>
            </Background>

            <ModalView
                closeModal={handleCloseModal}
                visible={openGuildsModal}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}