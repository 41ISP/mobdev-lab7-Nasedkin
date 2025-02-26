import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const MessagebarInput = () => {
    return (
        <View style={styles.cntr}>
            <TextInput placeholder="Введите сообщение" style={styles.input} />
            <TouchableOpacity>
                <Text style={styles.icon}>
                    ➤
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: '#01172F',
        borderRadius: 5,
        margin: 10,
        width: '80%',
        backgroundColor: '#A2999E',
        color: '#01172F'
    },
    cntr: {
        backgroundColor: '#6F5E53',
        borderTopColor: 'black',
        borderTopWidth: 2,
        flexDirection: 'row',
    },
    icon: {
        fontSize: 48,
        color: '#091540',
    },
});
export default MessagebarInput