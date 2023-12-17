import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Screen } from './components/Screen';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
// using this file as the layout as if in nextjs
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
export default function App() {
  const [fontsLoaded] = useFonts({
    'AfacadRegular': require('./assets/fonts/AfacadRegular.ttf'),
    'AfacadItalic': require('./assets/fonts/AfacadItalic.ttf'),
    'RubicMonoOne': require('./assets/fonts/RubikMonoOneRegular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await sleep(2000);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View onLayout={onLayoutRootView} className="flex-col items-center justify-between bg-[#ebfffc] outline-2 outline-yellow-500 h-full ">
        <Screen title="Home" subtitle={subtitle} >
          <Text>Home</Text>
        </Screen>
        {/* // navigationbar */}
        <View className="h-10 items-center justify-center bg-red-500">
          <Text className='text-3xl'>WOOF WOOF</Text>
        </View>
      </View>
    </>
  );

}
const subtitle = <Text className='text-sm text-black font-bold'>Subtitle</Text>
