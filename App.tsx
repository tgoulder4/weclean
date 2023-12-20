import React, { useCallback } from 'react';
import { useFonts, RubikMonoOne_400Regular } from "@expo-google-fonts/rubik-mono-one";
import * as SplashScreen from 'expo-splash-screen';
import ActivityScreen from './components/Screens/ActivityScreen';
import TasksScreen from './components/Screens/TasksScreen';
import LeaderboardScreen from './components/Screens/LeaderboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function ActivityScrn() {
  return <ActivityScreen />
}
function TasksScrn() {
  return <TasksScreen />
}
function LeaderboardScrn() {
  return <LeaderboardScreen />
}
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
// using this file as the layout as if in nextjs
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
export type IColour = "black" | "white" | "yellow-500" | "green-500" | "blue-500" | "indigo-500" | "pink-500" | "red-500" | "gray-500" | "slate-900" | "gray-300" | "[#55A38C]" | "[#4E9580]/50" | "white/50" | "[#310973]";

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
    <NavigationContainer onReady={onLayoutRootView}>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'white', headerShown: false, tabBarStyle: { backgroundColor: 'rgba(10,19,16,1)' } }} >
        <Tab.Screen name="Activity" component={ActivityScrn} />
        <Tab.Screen name="Tasks" component={TasksScrn} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScrn} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}
