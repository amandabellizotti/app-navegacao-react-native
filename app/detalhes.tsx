import { useRouter } from "expo-router";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from "react-native";

export default function Detalhes () {
    const router = useRouter();

    return (

    <ScrollView>
        <View style={styles.container}>
            <Image style={styles.imagem} source={{uri: "https://i.pinimg.com/736x/a0/c9/bb/a0c9bb80330b4bc1a717d01d7c212dfb.jpg"}} />
            <Text style={styles.title}>
                Tela de detalhes </Text>
        
        <Image style={styles.image} 
        source={{ uri:"https://i.pinimg.com/736x/72/f6/74/72f6741c9957eb6c5c70c9223468e9d5.jpg"}}/>

        <Text style={styles.description}> alguma coisa escrita ai</Text>

            <View style={styles.card}>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</Text>
                    </View>

        <TouchableOpacity style={styles.button} onPress={ () => router.back() }>
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        </View>
</ScrollView>
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

    imagem :{
        width: 250,
        height: 250,
        marginBottom: 20,
    },

    description: {
        fontSize: 16,
        color: "#332736",
        textAlign: "center",
    },

    card: {
        backgroundColor: "#f5d3faff",
        padding: 16,
        margin: 5,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})