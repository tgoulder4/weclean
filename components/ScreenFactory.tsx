import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable, useColorScheme, StyleProp, ViewStyle, TextStyle, Alert } from 'react-native'
import { colours, mode, spacing } from '../lib/constants'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title?: string;
  subtitle?: React.ReactNode;
  largerTitle?: boolean;
  largerSubtitle?: boolean;
  children: React.ReactNode;
  bottomStickyElement?: React.ReactNode;
  crossTopLeft?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  customTitle?: React.ReactNode;
  darkMode?: boolean;
}
export const Screen = (props: Props) => {
  const { titleStyle, customTitle } = props;
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
    <View style={{ backgroundColor: colourScheme == 'dark' ? colours.dark.background : colours.light.background }} className={`${props.bottomStickyElement ? "flex flex-col flex-1" : ""} h-full pt-16 `}>
      {
        props.crossTopLeft ?
          <View className='w-full flex flex-row justify-end px-4'>
            <Pressable onPress={() => { handleGoback() }}>
              <Ionicons name="close" size={28} color="#ebebeb" />
            </Pressable>
          </View>
          : <></>
      }
      <ScrollView style={{ rowGap: spacing.gaps.separateElement }} className={`${mode == "development" ? "bg-red-500" : ""}  w-full px-2`} contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={{ marginBottom: spacing.gaps.separateElement }} className={`${mode == "development" ? "bg-blue-500" : ""} mt-8`}>
          {customTitle ?
            customTitle
            : props.title ?
              <Text style={[titleStyle, { color: colourScheme == "dark" ? colours.dark.textPrimary : colours.light.textPrimary }]} className={`tracking-tighter font-rubik ${props.largerTitle ? 'text-2xl' : 'text-xl'} font-bold`}>{props.title}</Text> : <></>
          }
          {
            props.subtitle ? <Text className={`font-afa text-base ml-1`}>{props.subtitle}</Text> : <></>
          }
        </View>
        <View style={{ rowGap: spacing.gaps.separateElement }} className={`${props.bottomStickyElement ? "" : "pb-36"} w-full flex flex-col ${mode == "development" ? "bg-yellow-500" : ""}`}>
          {props.children}
        </View>
      </ScrollView>
      {
        props.bottomStickyElement ? <View className='w-full bg-green-500'>{props.bottomStickyElement}</View> : <></>
      }
    </View>
  )
}