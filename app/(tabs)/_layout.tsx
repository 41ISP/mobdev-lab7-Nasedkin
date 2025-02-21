
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import TopBar from '@/shared/ui/topbar/topbar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Чаты' , headerTitleAlign: 'center'}} />
        <Stack.Screen name="ContactScreen" options={{ title: 'Контакты', headerTitleAlign: 'center' }} />
        <Stack.Screen name="LoginScreen" options={{ title: 'Логин' , headerTitleAlign: 'center'}} />
        <Stack.Screen name="MessageScreen" options={{ title: 'Чат' , headerTitleAlign: 'center'}} />
      </Stack>
      <TopBar />
    </ThemeProvider>
  );
}
