import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ContactScreen() {

    const handleOpenChat = () => {
        alert('Будет открыт чат с пользователем')
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'navy', fontSize: 24}}>
                            Показать онлайн
                        </Text>
                        <Switch/>
                    </View>
                    <ScrollView>

                    <View style={styles.info} onTouchEnd={handleOpenChat}>
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
                    </ScrollView>
                </View>
            </View>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        padding: 20
    },
    info: {
        backgroundColor: 'crimson',
        borderColor: 'navy',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
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