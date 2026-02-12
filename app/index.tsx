import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Home() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Esta é a tela inicial do nosso aplicativo!</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>Ir para detalhes</Text>
                </TouchableOpacity>
        </View>
    );
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
})