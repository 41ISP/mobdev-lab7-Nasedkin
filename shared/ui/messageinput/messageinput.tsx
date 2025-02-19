import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const MessagebarInput = () => {
    return (
        <View style={styles.cntr}>
            <TextInput placeholder="Введите сообщение" style={styles.input} />
            <TouchableOpacity>
                <Text style={styles.icon}>
                💬
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        margin: 10,
        width: '80%',
        backgroundColor: 'pink',
    },
    cntr: {
        backgroundColor: 'navy',
        flexDirection: 'row',
    },
    icon:{
        fontSize: 48,
    },
});
export default MessagebarInput