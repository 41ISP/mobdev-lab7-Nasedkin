import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function Index() {

    const handleOpenChat = () => {
        alert('Будет открыт чат с пользователем')
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.chat} onTouchEnd={handleOpenChat}>
                        <View >
                            <Text style={styles.text}>
                                Наименование чата
                            </Text>
                            <Text style={styles.text2}>
                                Последнее сообщение
                            </Text>
                        </View>
                    </View>
                </ScrollView>
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
    chat: {
        borderWidth: 2,
        borderColor: 'navy',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'crimson',
        justifyContent: 'space-between'
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