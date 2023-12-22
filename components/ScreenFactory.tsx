import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import mode from '../lib/constants'
type Props = {
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}
export const Screen = (props: Props) => {
  const [scrollAmount, setScrollAmount] = useState(0)
  return (
    <>
      <ScrollView className={`${mode == "development" ? "bg-red-500" : "from-white to-[#eeeeee]"} flex flex-col w-full px-2 pt-28`} contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View className={`${mode == "development" ? "bg-blue-500" : ""} mb-4`}>
          <Text className='font-rubik text-xl text-black font-bold'>{props.title}</Text>
          {
            props.subtitle ? <Text className='font-afa'>{props.subtitle}</Text> : <></>
          }

        </View>
        {/* {scrollAmount > 20 ?
          <View className='bg-white p-4 sticky top-0'>
            <Text className=' text-sm text-black font-bold'>{props.title}</Text>
          </View>
          : <></>} */}
        <View className={`w-full ${mode == "development" ? "bg-yellow-500" : ""} pb-[80%]`}>

          {props.children}
        </View>
      </ScrollView>
    </>
  )
}