import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { Fundo } from '../../components/fundo';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { styles } from "./styles";
import { MenuStackTypes } from "../../navigation/Login.navigation";

export interface IAutenticar {
    email?: string;
    password?: string;
}

export function Login({ navigation }: MenuStackTypes) {

    const [data, setData] = useState<IAutenticar>(); //Preenche dados

    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data) 
        } else {
            Alert.alert("Preencha todos os campos!")
        }
    }

    function handleRegister() {
        navigation.navigate("Cadastrar")
    }

    function handleChange(item: IAutenticar) {
        setData({...data, ...item});
    }



    return (
        
    );
}