import { useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const TopBar = () => {
    const router = useRouter()

    const handleContacts = () => {
        router.push('/ContactScreen')
    }
    const handleChat = () => {
        router.push('/')
    }
    const handleChats = () => {
        router.push('/MessageScreen')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={handleChats}>
                <Text style={styles.text}>
                    ЧАТ
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleContacts}>
                <Text style={styles.text}>
                    КОНТАКТЫ
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleChat}>
                <Text style={styles.text}>
                    ЧАТЫ
                </Text>
            </TouchableOpacity>
        </View>
    )
}

//1F0322
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1F0322',
        width: '100%',
    },
    text: {
        color: '#FDFFFC',
        fontSize: 24,
        padding: 5,
        width: "auto",
        textAlign: 'center',
        fontWeight: 'bold',

    },
    btn: {
        flexGrow: 1,
        borderTopColor: 'black',
        borderTopWidth: 3,
        maxWidth: '33.3%',
    }

});
export default TopBar