
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import TopBar from '@/shared/ui/topbar/topbar';
import { Header } from 'react-native/Libraries/NewAppScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [userName, setUserName] = useState('')
  const [userAuth, setUserAuth] = useState(false)
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

  useEffect(()=>{
    const userLogin = false
    setUserAuth(userLogin)
    if(userAuth) router.replace('/(tabs)')
  }, [])

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Логин' , headerTitleAlign: 'center'}}/>
    </Stack>
  );
}
