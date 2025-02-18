import { useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

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
const TopBar = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleChats}>
                <Text style={styles.text}>
                    Чаты
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleContacts}>
                <Text style={styles.text}>
                    Контакты
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleChat}>
                <Text style={styles.text}>
                    Чат
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      backgroundColor: 'lavander',
      flexDirection: 'row',
      justifyContent:'space-between',
      padding: 10,
      width: '100%'
    },
    text: {
        color: 'goldenrod',
        fontSize: 24,
        borderColor: 'navy',
        borderWidth: 3,
        width: "auto"
    }
  });
export default TopBar