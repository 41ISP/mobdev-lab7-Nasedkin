import { useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const TopBar = () => {
    const router = useRouter()
    
    const handleContacts = () =>{
        router.push('/ContactScreen')
    }
    const handleChat = () =>{
        router.push('/')
    }
    const handleChats = () =>{
        router.push('/MessageScreen')
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={handleChats}>
                <Text style={styles.text}>
                ✉️ Чат
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleContacts}>
                <Text style={styles.text}>
                📱 Контакты
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleChat}>
                <Text style={styles.text}>
                📮 Чаты
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: 'darkred',
      width: '100%',
    },
    text: {
        color: 'lavender',
        fontSize: 28,
        padding: 5,
        width: "auto",
        textAlign: 'center',
    },
    btn:{
        flexGrow: 1,
        borderColor: 'black',
        borderWidth: 1,
    }
    
  });
export default TopBar