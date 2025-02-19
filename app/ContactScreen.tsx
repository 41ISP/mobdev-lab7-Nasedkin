import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ContactScreen() {

    const handleOpenChat = () => {
        alert('Будет открыт чат с пользователем')
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View>
                    <ScrollView>

                    <View style={styles.info}>
                        <Image src="https://static.tildacdn.com/tild3663-3631-4432-b966-326630376466/97394.png" style={styles.icon} />
                        <View style={styles.somemargin}>
                            <Text style={styles.text}>
                                ФИО Пользователя
                            </Text>
                            <Text style={styles.text2}>
                                Онлайн/Оффлайн
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handleOpenChat}>
                            <Text style={styles.message}>
                            ✉
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    message:{
        padding: 10,
        fontSize: 64
    },
    info: {
        backgroundColor: 'orange',
        borderColor: 'navy',
        padding: 5,
        maxHeight: '90%',
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: "black",
        borderWidth: 3
    },
    somemargin: {
        marginLeft: 10,
    },
    text: {
        color: 'darkmagenta',
        fontSize: 24
    },
    text2: {
        color: 'blue',
        fontSize: 16
    }
});