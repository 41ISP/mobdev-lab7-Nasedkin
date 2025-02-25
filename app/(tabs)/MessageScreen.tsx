import Message from "@/shared/ui/message/message";
import MessagebarInput from "@/shared/ui/messageinput/messageinput";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MessageScreen() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Image src="https://static.tildacdn.com/tild3663-3631-4432-b966-326630376466/97394.png" style={styles.icon} />
                    <View style={styles.somemargin}>
                        <Text style={styles.text}>
                            Имя пользователя
                        </Text>
                        <Text style={styles.text2}>
                            Онлайн
                        </Text>
                    </View>
                </View>

                {/* Вывод сообщений */}
                <ScrollView>
                    <Message />
                    <Message other />
                </ScrollView>

            </View>
            <MessagebarInput />
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#577399',
        flex: 1
    },
    info: {
        backgroundColor: '#01172F',
        borderBottomColor: 'black',
        padding: 5,
        borderBottomWidth: 2,
        width: '100%',
        flexDirection: 'row',
    },

    icon: {
        width: 50,
        height: 50,
        backgroundColor: '#577399',
        borderRadius: 25,
        borderColor: "black",
        borderWidth: 3
    },
    somemargin: {
        marginLeft: 10,
    },
    text: {
        color: '#F2BB05',
        fontSize: 24,
        fontWeight: 'bold'
    },
    text2: {
        color: '#E7E7E7',
        fontSize: 16,
        fontWeight: 'bold'
    }
});