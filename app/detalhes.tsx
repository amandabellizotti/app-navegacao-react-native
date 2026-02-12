import { useRouter } from "expo-router";
import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export default function Detalhes () {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Tela de detalhes </Text>
        
        <Image style={styles.image} 
        source={{ uri:"https://i.pinimg.com/736x/72/f6/74/72f6741c9957eb6c5c70c9223468e9d5.jpg"}}/>

        <Text style={styles.description}> alguma coisa escrita ai</Text>

        <TouchableOpacity style={styles.button} onPress={ () => router.back() }>
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        </View>

    )
}

const styles= StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#bf8cc8ff",
    },

    title: {
        fontSize:24,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 16,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 500,
        color: "#332736",
        marginBottom: 4
    },

    button: {
        marginTop: 8,
        backgroundColor: "#a05eaaff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },

    description: {
        fontSize: 16,
        color: "#332736",
        textAlign: "center",
    }
})