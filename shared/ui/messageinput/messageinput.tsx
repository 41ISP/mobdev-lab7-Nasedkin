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
        borderColor: 'navy',
        borderRadius: 5,
        margin: 10,
        width: '80%',
        backgroundColor: 'pink',
        color: 'navy'
    },
    cntr: {
        backgroundColor: 'crimson',
        borderTopColor: 'navy',
        borderTopWidth: 2,
        flexDirection: 'row',
    },
    icon:{
        fontSize: 48,
        color: 'pink',
    },
});
export default MessagebarInput