import React from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Fundo } from '../../components/fundo'
import {Scontainer} from '../../styles/globalstyle'

export function Tela3() {

    const bolhas = require('../../assets/bolhas.png')

    return (
        <Fundo>
            <View style={Scontainer.container}>
                <Text style={styles.h4}>
                    Caso queira criar um aquário totalmente independente, temos as dicas certas!
                </Text>
                <Image style={styles.img} source={require('../../assets/lagosta.png')} />
                <View style={styles.bub}>
                    <ImageBackground source={bolhas} resizeMode="cover">
                        <Text style={styles.buble}>
                            Há várias espécies de plantas e animais que limpam o aquário e alimentam seus pets por você!
                        </Text>
                    </ImageBackground>
                </View>
            </View>
            
        </Fundo>
    )
}