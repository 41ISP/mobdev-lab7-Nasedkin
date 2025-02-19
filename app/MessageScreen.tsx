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
                            ФИО Пользователя
                        </Text>
                        <Text style={styles.text2}>
                            Онлайн/Оффлайн
                        </Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.in}>
                        <Text style={{ color: 'goldenrod' }}>
                            Входящее сообщение
                        </Text>
                    </View>

                    <View style={styles.out}>
                        <Text style={{ color: 'navy' }}>
                            Исходящее сообщение
                        </Text>
                    </View>
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
        backgroundColor: 'yellow',
        borderBottomColor: 'navy',
        padding: 5,
        borderBottomWidth: 2,
        width: '100%',
        flexDirection: 'row',
    },
    in: {
        backgroundColor: 'navy',
        borderWidth: 2,
        borderRadius: 25,
        borderColor: "darkgoldenrod",
        width: '60%',
        height: 'auto',
        padding: 10,
        margin: 10
    },
    out: {
        backgroundColor: 'tomato',
        borderWidth: 2,
        borderRadius: 25,
        borderColor: "navy",
        width: '60%',
        height: 'auto',
        padding: 10,
        margin: 10,
        alignSelf: 'flex-end'
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
        color: 'darkcyan',
        fontSize: 24
    },
    text2: {
        color: 'tomato',
        fontSize: 16
    }
});