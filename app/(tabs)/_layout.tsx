
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
import { socket } from '@/shared/api/socket';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const rtr = useRouter()
  const { user, users, setUsers } = useStorage()
  useEffect(() => {
    if (!user.id) {
      rtr.push('/login')
    }
    else {
      socket.on('register', (id) => {
        socket.id = id
        setUsers(id)
      })
    }
  }, [])

  const handlePress = () => {
    rtr.push('/login')
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Чаты', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#FF006E', fontSize: 20 }} onPress={handlePress}>Выход</Text></View>) }} />
        <Stack.Screen name="ContactScreen" options={{ title: 'Контакты', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#FF006E', fontSize: 20 }} onPress={handlePress}>Выход</Text></View>) }} />
        <Stack.Screen name
          ="MessageScreen" options={{ title: 'Чат', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#FF006E', fontSize: 20 }} onPress={handlePress}>Выход</Text></View>) }} />
      </Stack>
      <TopBar />
    </ThemeProvider>
  );
}
