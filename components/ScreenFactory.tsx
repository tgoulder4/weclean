import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, useColorScheme, StyleProp, ViewStyle, TextStyle, Alert } from 'react-native'
import { colours, mode, spacing } from '../lib/constants'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  subtitle?: React.ReactNode;
  largerTitle?: boolean;
  largerSubtitle?: boolean;
  children: React.ReactNode;
  bottomStickyElement?: React.ReactNode;
  crossTopLeft?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  darkMode?: boolean;
}
export const Screen = (props: Props) => {
  const { titleStyle } = props;
  const navigation = useNavigation();
  const colourScheme = props.darkMode ? 'dark' : useColorScheme();
  function handleGoback() {
    Alert.alert("Exit elevation?", "Are you sure you want to exit elevating your crew?", [
      {
        text: "Cancel",
        onPress: () => { },
        style: "cancel"
      },
      {
        text: "Exit",
        onPress: () => { navigation.goBack() },
        style: "destructive"
      }

    ]);
  }
  return (
    <View style={{ backgroundColor: colourScheme == 'dark' ? colours.dark.background : colours.light.background }} className={`${props.bottomStickyElement ? "flex flex-col" : ""} pt-6 h-full`}>
      <View className='mt-16'>
        <View className='w-full flex flex-row justify-end px-4 bg-green-500'>
          {
            props.crossTopLeft ? <Pressable onPress={() => { handleGoback() }}>

              <Ionicons name="close" size={24} color="black" />
            </Pressable> : <></>
          }
        </View>
        <ScrollView className={`${mode == "development" ? "bg-red-500" : ""} flex flex-col w-full px-2`} contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View className={`${mode == "development" ? "bg-blue-500" : ""} mb-4`}>
            <Text style={[titleStyle, { color: colourScheme == "dark" ? colours.dark.textPrimary : colours.light.textPrimary }]} className={`tracking-tighter font-rubik ${props.largerTitle ? 'text-2xl' : 'text-xl'} font-bold`}>{props.title}</Text>
            {
              props.subtitle ? <Text className={`font-afa text-base ml-1`}>{props.subtitle}</Text> : <></>
            }

          </View>
          <View style={{ rowGap: spacing.gaps.separateElement }} className={`pb-36 w-full flex flex-col ${mode == "development" ? "bg-yellow-500" : ""}`}>
            {props.children}
          </View>
        </ScrollView>
      </View>
      {
        props.bottomStickyElement ? <View className='w-full'>{props.bottomStickyElement}</View> : <></>
      }
    </View>
  )
}