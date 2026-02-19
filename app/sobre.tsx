import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function Sobre () {
    const router = useRouter();
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre</Text>
            <Text style={styles.subtitle}>Esta é a tela sobre do nosso aplicativo!</Text>
            <Image style={styles.image} source={{uri: "https://i.pinimg.com/736x/32/02/10/3202105b8800027e0d7ce21771704439.jpg"}}></Image>
            <View style={styles.card}>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Voltar Home</Text>
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