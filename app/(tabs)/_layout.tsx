
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Slot, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import TopBar from '@/shared/ui/topbar/topbar';
import { Text, View } from 'react-native';
import { useStorage } from '@/shared/stor/stor';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const rtr = useRouter()

  const { user } = useStorage()
  useEffect(() => {
    if (!user.id) {
      rtr.replace('/login')
    }

  }, [])

  const handlePress = () => {
    rtr.replace('/login')
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Чаты', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#1F0322', fontSize: 20 }} onPress={handlePress}>Выход</Text></View>) }} />
        <Stack.Screen name="ContactScreen" options={{ title: 'Контакты', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#1F0322', fontSize: 20 }} onPress={handlePress}>Выход</Text></View>) }} />
        <Stack.Screen name
        ="MessageScreen" options={{ title: 'Чат', headerTitleAlign: 'center', headerRight: () => (<View><Text style={{ color: '#1F0322', fontSize: 20 }} onPress={handlePress}>Выход</Text></View>) }} />
      </Stack>
      <TopBar />
    </ThemeProvider>
  );
}
