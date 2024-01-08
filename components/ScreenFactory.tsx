import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import { mode, spacing } from '../lib/constants'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
type Props = {
  title: string;
  subtitle?: React.ReactNode;
  largerTitle?: boolean;
  largerSubtitle?: boolean;
  children: React.ReactNode;
  bottomStickyElement?: React.ReactNode;
  crossTopLeft?: boolean;
}
export const Screen = (props: Props) => {
  return (
    <View className={`${props.bottomStickyElement ? "flex flex-col" : ""} pt-6 bg-[#f9f9f9] h-full`}>
      <View className='mt-16'>
        <View className='w-full flex flex-row justify-end px-4 bg-green-500'>
          {
            props.crossTopLeft ? <Pressable>

              <Ionicons name="close" size={24} color="black" />
            </Pressable> : <></>
          }
        </View>
        <ScrollView className={`${mode == "development" ? "bg-red-500" : ""} flex flex-col w-full px-2`} contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View className={`${mode == "development" ? "bg-blue-500" : ""} mb-4`}>
            <Text className={`tracking-tighter font-rubik ${props.largerTitle ? 'text-2xl' : 'text-xl'} text-black font-bold`}>{props.title}</Text>
            {
              props.subtitle ? <Text className={`font-afa text-base ml-1`}>{props.subtitle}</Text> : <></>
            }

          </View>
          <View style={{ rowGap: spacing.gaps.normal }} className={`pb-36 w-full flex flex-col ${mode == "development" ? "bg-yellow-500" : ""}`}>
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