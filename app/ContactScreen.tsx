import Contact from "@/shared/ui/contact/contact";
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ContactScreen() {


    return (
        <SafeAreaProvider>
            <View style={{ flexDirection: 'row', padding: 5, borderColor: 'black', borderBottomWidth: 2, justifyContent: 'center', backgroundColor: '#01172F' }}>
                <Text style={{ color: '#F2BB05', fontSize: 24, verticalAlign: 'middle', fontWeight: 'bold' }}>
                    Показать онлайн
                </Text>
                <Switch />
            </View>
            <View style={styles.container}>
                <View>
                    <Contact online/>
                    <Contact />
                </View>
            </View>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#577399',
        flex: 1,
        padding: 20
    },

});