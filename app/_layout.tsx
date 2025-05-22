import {Stack} from "expo-router";
import "./globals.css";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen'
import GlobalProvider from "@/lib/global-provider";

// @ts-ignore
export default function RootLayout() {
  const [fonstLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  })

  useEffect(() => {
    if(fonstLoaded) {
      SplashScreen.hideAsync();
    }
  },[fonstLoaded]);

  if(!fonstLoaded) return null;

  return(
      <GlobalProvider>
      <Stack screenOptions={{headerShown: false}} />
      </GlobalProvider>
  )


}
