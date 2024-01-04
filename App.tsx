import React, { useCallback, useState } from 'react';
import { useFonts, RubikMonoOne_400Regular } from "@expo-google-fonts/rubik-mono-one";
import * as SplashScreen from 'expo-splash-screen';
import ActivityScreen from './components/Screens/ActivityScreen';
import TasksScreen from './components/Screens/TasksScreen';
import LeaderboardScreen from './components/Screens/LeaderboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import GoProScreen from './components/Screens/GoProScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PaymentScreen from './components/Screens/PaymentScreen';
import type { StatusBarStyle } from 'react-native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
function ActivityScrn() {
  return <ActivityScreen />
}
function TasksScrn() {
  return <TasksScreen />
}
function LeaderboardScrn() {
  return <LeaderboardScreen />
}
function NewRequestScrn() {
  return <Text>New Request</Text>
}
function ProfileScrn() {
  return <Text>Profile</Text>
}
function GoProScrn() {
  return <GoProScreen />
}
function PaymentScrn() {
  return <PaymentScreen />
}
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();
// using this file as the layout as if in nextjs
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export default function App() {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>("light-content")
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer onReady={onLayoutRootView}>
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'white', headerShown: false, tabBarStyle: { backgroundColor: 'rgba(10,19,16,1)', height: 85 } }} >
          <Tab.Screen name="Activity" component={ActivityScrn} initialParams={setStatusBarBackgroundColor} />
          <Tab.Screen name="Tasks" component={TasksScrn} />
          <Tab.Screen name="New Request" component={NewRequestScrn} />
          <Tab.Screen name="Leaderboard" component={LeaderboardScrn} />
          <Tab.Screen name="Profile" component={ProfileScrn} />
          <Tab.Screen name="Go Pro" component={GoProScrn} initialParams={{ andText: "can enter cash prize competitions." }}
            options={() => ({
              tabBarStyle: {
                display: "none",
              }
              ,
              tabBarItemStyle: {
                display: "none"
              }
            })}
          />
          <Tab.Screen name="Payment" component={PaymentScrn}
            options={() => ({
              tabBarStyle: {
                display: "none",
              }
              ,
              tabBarItemStyle: {
                display: "none"
              }
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );

}
