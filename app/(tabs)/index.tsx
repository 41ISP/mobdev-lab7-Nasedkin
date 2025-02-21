import Chat from "@/shared/ui/chat/chat";
import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function Index() {


    return (
        <SafeAreaProvider>
            
            <Stack.Screen name="index" options={{title:'otsuststvuet', headerShown: false}}/>
            <ScrollView style={styles.container}> 
                <View >
                    <Chat />
                    <Chat />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#577399',
        flex: 1,
        padding: 20,
    },

});