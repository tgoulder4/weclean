import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Screen } from './components/Screen';
import { useFonts, RubikMonoOne_400Regular } from "@expo-google-fonts/rubik-mono-one";
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
// using this file as the layout as if in nextjs
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
export default function App() {
  const [fontsLoaded] = useFonts({
    "AfacadRegular": require('./assets/fonts/AfacadRegular.ttf'),
    "AfacadItalic": require('./assets/fonts/AfacadItalic.ttf'),
    "rubik": RubikMonoOne_400Regular
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
      <View onLayout={onLayoutRootView} className="px-2 pt-28 flex-col items-center justify-between bg-[#ebfffc] outline-2 outline-yellow-500 h-full ">
        <Screen title="Activity" subtitle={subtitle} content={<Text>hello</Text>} />
        {/* // navigationbar */}
      </View>
    </>
  );

}
const subtitle = <Text className='text-xs text-black font-bold'>chun lee baddies crew score: <Text className='text-red-700'>2.9★</Text></Text>
