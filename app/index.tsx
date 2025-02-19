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
                    <View style={styles.chat}>
                        <View >
                            <Text style={styles.text}>
                                Наименование чата
                            </Text>
                            <Text style={styles.text2}>
                                Последнее сообщение + время отправки
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
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightyellow',
        flex: 1
    },
    message: {
        paddingRight: 10,
        fontSize: 75
    },
    chat: {
        borderWidth: 2,
        borderColor: 'navy',
        borderRadius: 15,
        width: '90%',
        padding: 5,
        marginTop: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'space-between'
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