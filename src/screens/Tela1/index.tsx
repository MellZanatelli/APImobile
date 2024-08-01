
import { View, Text, Image, TouchableOpacity} from "react-native";
import { Fundo } from '../../components/fundo';
import { styles } from "./styles";
import { Scontainer } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/Login.navigation";

export function Tela1 ({navigation}: MenuStackTypes){

    return (
        <Fundo>
            <View style={Scontainer.container}>
                <View style={styles.header}>
                    <Text style={styles.h3}>
                        Bem-vindo ao
                    </Text>
                    <Image style={styles.titulo} source={require('../../assets/Aquarium.png')} />
                </View>
                <Text style={styles.h3}>
                    Descubra como criar e cuidar de seu próprio ecossistema aquático!
                </Text>
                <Image style={styles.img} source={require('../../assets/ecossistema.png')} />
            </View>
            <View>
                <TouchableOpacity style = {styles.botao} onPress={() => navigation.push("pag2")}>
                    <Text style = {styles.txt}> Próximo </Text>
                </TouchableOpacity>
            </View>
        </Fundo>
    )
}