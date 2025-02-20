import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IMessage extends PropsWithChildren {
    other?: boolean
}

const Message = ({other}: IMessage) => {
    return (
            <View style={other ? styles.out : styles.in}>
                <Text style={{ color: '#01172F' , fontWeight: 'bold'}}>
                    Сообщение
                </Text>
                <Text style={{ color: '#01172F' , fontWeight: 'bold', textAlign: 'right'}}>
                    12:30
                </Text>
            </View>
    )
}

export default Message

const styles = StyleSheet.create({
    in: {
        backgroundColor: '#A2999E',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "black",
        maxWidth: '60%',
        minWidth: '60%',
        height: 'auto',
        padding: 10,
        margin: 10
    },
    out: {
        backgroundColor: '#A2999E',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "black",
        maxWidth: '60%',
        minWidth: '60%',
        height: 'auto',
        padding: 10,
        margin: 10,
        alignSelf: 'flex-end'
    },
});
