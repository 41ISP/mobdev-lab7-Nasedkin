
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Slot, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import TopBar from '@/shared/ui/topbar/topbar';
import { Text, View } from 'react-native';
import { IStorage, useStorage } from '@/shared/stor/stor';
import { io, Socket } from 'socket.io-client';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [mounted, setIsMounted] = useState(false)
  const rtr = useRouter()
  const [socket, setSocket] = useState<null | Socket>(null)
  const { user, users, setUsers, setUser } = useStorage()
  useEffect(() => {
    const newSocket = io(process.env.EXPO_PUBLIC_URL)
    setSocket(newSocket)

    newSocket.emit("register", user.id)

    newSocket.on('users', (users) => {
        console.log(users);
        setUsers(users)
    })

    return () => { newSocket.disconnect() }
  }, [])

  useEffect(() => {
    if (mounted && !user.id) {
      rtr.push('/login')
    }
  }, [mounted])

  // useEffect(() => {
  //   console.log("connecting to socket1");
  //   if (user.id && socket) {
  //     console.log("connecting to socket2");

  //     socket.on('private_messages', (id) => {
  //       console.log(id)
  //       setUsers(id)
  //     })
  //     console.log(socket);

  //   }

  //   return () => {
  //     socket && socket.off("register")
  //   }
  // }, [socket])

  const handlePress = () => {
    rtr.push('/login')
    setUser({ id: '' })
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Чаты', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#FF006E', fontSize: 20, margin: 10 }} onPress={handlePress}>Выход</Text></View>) }} />
        <Stack.Screen name="ContactScreen" options={{ title: 'Контакты', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#FF006E', fontSize: 20, margin: 10 }} onPress={handlePress}>Выход</Text></View>) }} />
        <Stack.Screen name="MessageScreen" options={{ title: 'Чат', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#FF006E', fontSize: 20, margin: 10 }} onPress={handlePress}>Выход</Text></View>) }} />
      </Stack>
      <TopBar />
    </ThemeProvider>
  );
}
