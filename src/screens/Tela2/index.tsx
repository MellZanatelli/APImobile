import React from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import { Fundo } from '../../components/fundo'
import {Scontainer} from '../../styles/globalstyle'

export function Tela2() {

    const bolhas = require('../../assets/bolhas.png')

    return (
        <Fundo>
            <View style={Scontainer.container}>
                <View style={styles.bub}>
                    <ImageBackground source={bolhas} resizeMode='cover'>
                        <Text style={styles.buble}>
                            Descubra qual aquário se adequa melhor às espécies que deseja cuidar!
                        </Text>
                    </ImageBackground>
                </View>
                <Image style={styles.img} source={require('../../assets/aquario.png')} />
                <Text style={styles.h4}>
                    Ou então, descubra quais espécies podem dar vida ao aquário que já possui!
                </Text>
            </View>
        </Fundo>
    )
}