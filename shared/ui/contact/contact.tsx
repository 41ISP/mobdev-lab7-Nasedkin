import { IStorage, useStorage } from "@/shared/stor/stor";
import { PropsWithChildren, useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

interface IStatus extends PropsWithChildren {
    online?: boolean
}

const Contact = ({ online }: IStatus) => {

    const [users] = useState<IStorage>()

    const handleOpenChat = () => {
        alert('Будет открыт чат с пользователем')
    }

    return (

        <View style={styles.info} onTouchEnd={handleOpenChat}>
            <Image src="https://static.tildacdn.com/tild3663-3631-4432-b966-326630376466/97394.png" style={styles.icon} />
            <View style={styles.somemargin}>
                <Text style={styles.text}>
                    {useStorage().user.id}

                </Text>
                <Text style={online ? styles.onlineUser : styles.offlineUser}>
                    Онлайн/Оффлайн
                </Text>
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    info: {
        backgroundColor: '#A2999E',
        borderColor: '#01172F',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        margin: 5
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
        color: '#091540',
        fontSize: 24,
        fontWeight: 'bold'
    },
    onlineUser: {
        color: '#3F6634',
        fontSize: 18,
        fontWeight: 'bold'
    },
    offlineUser: {
        color: '#650D1B',
        fontSize: 18,
        fontWeight: 'bold'
    }
})