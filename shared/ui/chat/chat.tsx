import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


const Chat = () => {

    const handleOpenChat = () => {
        alert('Будет открыт чат с пользователем')
    }

    return (
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
    )
}

export default Chat

const styles = StyleSheet.create({
    chat: {
        borderWidth: 2,
        borderColor: '#01172F',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#A2999E',
        justifyContent: 'space-between',
        margin: 5
    },
    text: {
        color: '#091540',
        fontSize: 24,
        fontWeight: 'bold'
    },
    text2: {
        color: '#650D1B',
        fontSize: 16,
        fontWeight: 'bold'
    }
})