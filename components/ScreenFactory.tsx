import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import ui from '../lib/constants'
type Props = {
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}
export const Screen = (props: Props) => {
  const [scrollAmount, setScrollAmount] = useState(0)
  return (
    <>
      <ScrollView className={`bg-red-500 flex flex-col w-full px-2 pt-32`} contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View className='bg-blue-500 mb-6'>
          <Text className='font-rubik text-xl text-black font-bold'>{props.title}</Text>
          <Text className='font-afa'>{props.subtitle}</Text>
        </View>
        {/* {scrollAmount > 20 ?
          <View className='bg-white p-4 sticky top-0'>
            <Text className=' text-sm text-black font-bold'>{props.title}</Text>
          </View>
          : <></>} */}
        <View className='w-full bg-yellow-500 pb-[80%]'>

          {props.children}
        </View>
      </ScrollView>
    </>
  )
}