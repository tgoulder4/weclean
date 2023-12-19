import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFonts, RubikMonoOne_400Regular } from "@expo-google-fonts/rubik-mono-one";
import * as SplashScreen from 'expo-splash-screen';
import ActivityScreen from './components/Screens/ActivityScreen';
import ui from './lib/constants';
import TasksScreen from './components/Screens/TasksScreen';
SplashScreen.preventAutoHideAsync();
// using this file as the layout as if in nextjs
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
export type IColour = "black" | "white" | "yellow-500" | "green-500" | "blue-500" | "indigo-500" | "pink-500" | "red-500" | "gray-500" | "slate-900" | "gray-300" | "[#55A38C]" | "[#4E9580]/50";
export default function App() {
  const [fontsLoaded] = useFonts({
    "AfacadRegular": require('./assets/fonts/AfacadRegular.ttf'),
    "AfacadItalic": require('./assets/fonts/AfacadItalic.ttf'),
    "AfacadBold": require('./assets/fonts/AfacadBold.ttf'),
    "rubik": RubikMonoOne_400Regular
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await sleep(2000);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View onLayout={onLayoutRootView} className=" bg-white outline-2 outline-yellow-500 h-full">
        {/* // to get all tailwind colour classes */}
        <View className={`hidden bg-[#55A38C] bg-[#4E9580] bg-[#4E9580]/50 bg-black bg-white bg-yellow-500 bg-green-500 bg-blue-500 bg-indigo-500 bg-pink-500 bg-red-500 bg-gray-500 bg-gray-300 bg-slate-900`} />
        <ActivityScreen />
        {/* // navigationbar */}
      </View>
    </>
  );

}
