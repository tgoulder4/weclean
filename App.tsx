import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Screen } from './components/Screen';
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Screen screenName="Home" />
    </View>
  );
}
