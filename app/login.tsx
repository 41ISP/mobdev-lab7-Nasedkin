import { useStorage } from "@/shared/stor/stor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function LoginScreen() {

    const [userName, setUserName] = useState('')
    const {setUser} = useStorage()

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
            <Stack.Screen name="index" options={{title:'Логин', headerShown: false}}/>
            <View style={styles.container}>
                <Text style={{fontSize: 40, color: '#F2BB05',alignSelf: 'center', fontWeight: 'bold'}}>
                    Логин
                </Text>
                <TextInput style={styles.input} value={userName} onChangeText={setUserName}/>
                <TouchableOpacity style={styles.btn} onPress={handlePress}>
                    <Text  style={{fontSize: 30, color: '#01172F',alignSelf: 'center', fontWeight: 'bold'}}>
                        Вход
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#A2999E',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "black",
        marginBottom: 25,
        marginTop: 25,
        minWidth: '40%',
        maxWidth: '40%',
        alignSelf: 'center',
    },
    input:{
        backgroundColor: '#A2999E',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "black",
        marginBottom: 25,
        marginTop: 25,
        color: '#01172F'
    },
    container: {
        backgroundColor: '#577399',
        flex: 1,
        padding: 50,
        justifyContent: 'center'
    },

})