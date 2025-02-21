import { useStorage } from "@/shared/stor/stor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function LoginScreen() {

    const [userName, setUserName] = useState('')
    const {user, setUser} = useStorage()

    const handlePress = async () => {
        if(userName.trim().length != 0)
        {
            setUser({name: userName})
            router.replace('/(tabs)')
        }
        else alert('Ошибка, проверьте заполнение строки')
    }

    return (
        <SafeAreaProvider>
            <View>
                <Text>
                    Логин
                </Text>
                <TextInput style={styles.input} value={userName} onChangeText={setUserName}/>
                <TouchableOpacity style={styles.btn} onPress={handlePress}/>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    btn:{
        width: 150,
        height: 50,
        backgroundColor: 'red'
    },
    input:{
        borderWidth: 1
    }
})