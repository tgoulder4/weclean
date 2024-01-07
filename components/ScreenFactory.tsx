import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { mode, spacing } from '../lib/constants'
import { StatusBar } from 'expo-status-bar';
type Props = {
  title: string;
  subtitle?: React.ReactNode;
  largerTitle?: boolean;
  children: React.ReactNode;
  bottomStickyElement?: React.ReactNode;
}
export const Screen = (props: Props) => {
  return (
    <View className={`${props.bottomStickyElement ? "flex flex-col" : ""} pt-10 bg-[#f9f9f9] h-full`}>
      <StatusBar style='dark' />
      <View className='mt-16'>

        <ScrollView className={`${mode == "development" ? "bg-red-500" : ""} flex flex-col w-full px-2`} contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View className={`${mode == "development" ? "bg-blue-500" : ""} mb-4`}>
            <Text className={`font-rubik ${props.largerTitle ? 'text-2xl' : 'text-xl'} text-black font-bold`}>{props.title}</Text>
            {
              props.subtitle ? <Text className='font-afa text-base ml-1'>{props.subtitle}</Text> : <></>
            }

          </View>
          <View style={{ rowGap: spacing.gaps.normal }} className={`w-full flex flex-col ${mode == "development" ? "bg-yellow-500" : ""} pb-16`}>
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