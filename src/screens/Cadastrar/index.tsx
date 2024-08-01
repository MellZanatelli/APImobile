import React from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { FundoLog } from '../../components/fundoLogin';
import { styles } from "./styles";
import { Scontainer } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";

export function Cadastrar ({navigation}: MenuStackTypes){
    const splah = require('../../assets/fundo-aguaviva.png')
    return (
        <FundoLog>
            <View style={Scontainer.container}>
                <View style={styles.header}>
                    <Text style={styles.h3}>
                        Crie sua conta
                    </Text>
                    <View>
                        <Image style={styles.titulo} source={require('../../assets/Aquarium.png')}/>
                    </View>
                    <Image style={styles.titulo} source={require('../../assets/Aquarium.png')} />
                </View>
                <Text style={styles.h3}>
                    Descubra como criar e cuidar de seu próprio ecossistema aquático!
                </Text>
                <Image style={styles.img} source={require('../../assets/ecossistema.png')} />
            </View>
            <View>
                <TouchableOpacity style = {styles.botao} onPress={() => navigation.push("Cadastrar")}>
                    <Text style = {styles.txt}> Próximo </Text>
                </TouchableOpacity>
            </View>
        </FundoLog>
    )
}