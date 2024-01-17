import React, { useCallback, useState } from 'react';
import { useFonts, RubikMonoOne_400Regular } from "@expo-google-fonts/rubik-mono-one";
import * as SplashScreen from 'expo-splash-screen';
import ActivityScreen from './components/Screens/ActivityScreen';
import TasksScreen from './components/Screens/TasksScreen';
import LeaderboardScreen from './components/Screens/LeaderboardScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { StatusBarStyle } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import tinycolor from 'tinycolor2';
import Button from './components/Ui/button';
import NewRequestScreen from './components/Screens/NewRequestScreen';
import ProOnboarding from './components/Screens/ProOnboarding';
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
  return <NewRequestScreen />
}
function ProfileScrn() {
  return <Text>Profile</Text>
}
function ProOnboardingScrn() {
  return <ProOnboarding />
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
          <Tab.Screen name="Activity" component={ActivityScrn} options={() => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Svg preserveAspectRatio="xMinYMin slice" enable-background="new 0 0 40 40" height="40" width="40" viewBox="0 0 25 25" fill={`${focused ? '#FFFFFF' :
                  tinycolor("#FFFFFF").setAlpha(0.5).toString()
                  }`}><G><Path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,17c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1l0-0.61 c0-1.18,0.68-2.26,1.76-2.73C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43L0,17 c0,0.55,0.45,1,1,1l3.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1 c0.4,0.68,0.63,1.46,0.63,2.29V18l3.5,0c0.55,0,1-0.45,1-1L24,16.43z M12,6c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3s-3-1.34-3-3 C9,7.34,10.34,6,12,6z" /></G></Svg>
              );
            },
            tabBarShowLabel: false,
          })} />
          <Tab.Screen name="Tasks" component={TasksScrn} options={() => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Svg preserveAspectRatio="xMinYMin slice" enable-background="new 0 0 40 40" height="40" width="40" viewBox="0 0 25 25" fill={`${focused ? '#FFFFFF' :
                  tinycolor("#FFFFFF").setAlpha(0.5).toString()
                  }`}><G><Path d="M22,8c0-0.55-0.45-1-1-1h-7c-0.55,0-1,0.45-1,1s0.45,1,1,1h7C21.55,9,22,8.55,22,8z M13,16c0,0.55,0.45,1,1,1h7 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-7C13.45,15,13,15.45,13,16z M10.47,4.63c0.39,0.39,0.39,1.02,0,1.41l-4.23,4.25 c-0.39,0.39-1.02,0.39-1.42,0L2.7,8.16c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0l1.42,1.42l3.54-3.54 C9.45,4.25,10.09,4.25,10.47,4.63z M10.48,12.64c0.39,0.39,0.39,1.02,0,1.41l-4.23,4.25c-0.39,0.39-1.02,0.39-1.42,0L2.7,16.16 c-0.39-0.39-0.39-1.02,0-1.41s1.02-0.39,1.41,0l1.42,1.42l3.54-3.54C9.45,12.25,10.09,12.25,10.48,12.64L10.48,12.64z" /></G></Svg>
              );
            },
            tabBarShowLabel: false,
          })} />
          <Tab.Screen name="New Request" component={NewRequestScrn} options={({ navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Button customOnPress={() => { navigation.navigate("New Request") }} type='selection' backgroundColour='white' className='h-2/3 w-2/3'>
                  <Svg preserveAspectRatio="xMinYMin slice" enable-background="new 0 0 40 40" height="40" width="40" viewBox="0 0 25 25" fill={`${focused ? '#000' :
                    tinycolor("#000").setAlpha(0.8).toString()
                    }`}><G><Path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" /></G></Svg>
                </Button>
              );
            },
            tabBarShowLabel: false,
          })} />
          <Tab.Screen name="Leaderboard" component={LeaderboardScrn} options={() => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Svg preserveAspectRatio="xMinYMin slice" enable-background="new 0 0 40 40" height="32" width="32" viewBox="0 0 25 25" fill={`${focused ? '#FFFFFF' :
                  tinycolor("#FFFFFF").setAlpha(0.5).toString()
                  }`}><G><Path d="M6.5,21H3c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3.5c0.55,0,1,0.45,1,1v10C7.5,20.55,7.05,21,6.5,21z M13.75,3h-3.5 c-0.55,0-1,0.45-1,1v16c0,0.55,0.45,1,1,1h3.5c0.55,0,1-0.45,1-1V4C14.75,3.45,14.3,3,13.75,3z M21,11h-3.5c-0.55,0-1,0.45-1,1v8 c0,0.55,0.45,1,1,1H21c0.55,0,1-0.45,1-1v-8C22,11.45,21.55,11,21,11z" /></G></Svg>
              );
            },
            tabBarShowLabel: false,
          })} />
          <Tab.Screen name="Profile" component={ProfileScrn} options={() => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Svg preserveAspectRatio="xMinYMin slice" enable-background="new 0 0 40 40" height="40" width="40" viewBox="0 0 25 25" fill={`${focused ? '#FFFFFF' :
                  tinycolor("#FFFFFF").setAlpha(0.5).toString()
                  }`}><G><Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" /></G></Svg>
              );
            },
            tabBarShowLabel: false,
          })} />
          <Tab.Screen name="Go Pro" component={ProOnboardingScrn}
            options={() => ({
              tabBarStyle: {
                display: "none",
              }
              ,
              tabBarItemStyle: {
                display: "none"
              },

            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
