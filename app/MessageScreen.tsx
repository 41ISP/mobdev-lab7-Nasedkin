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
                <Message/> 
                <Message other/> 
                </ScrollView>

            </View>
            <MessagebarInput />
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1
    },
    info: {
        backgroundColor: 'crimson',
        borderBottomColor: 'navy',
        padding: 5,
        borderBottomWidth: 2,
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
        color: 'cyan',
        fontSize: 24
    },
    text2: {
        color: 'lavender',
        fontSize: 16
    }
});