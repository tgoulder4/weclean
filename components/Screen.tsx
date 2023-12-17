import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import ui from '../lib/constants'
type Props = {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}
export const Screen = (props: Props) => {
  const [scrollAmount, setScrollAmount] = useState(0)
  return (
    <>
      <ScrollView className={`flex-1 h-${100 - ui.navHeight}`} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text className='font-rubic text-3xl text-black font-bold'>{props.title}</Text>
        <Text className='font-afa'>{props.subtitle}</Text>
        {scrollAmount > 20 ?
          <View className='bg-white p-4 w-full sticky top-0'>
            <Text className=' text-sm text-black font-bold'>{props.title}</Text>
          </View>
          : <></>}
        <View className='flex flex-col items-center justify-center'>
          {props.children}
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebfffc',
    alignItems: 'center',
    justifyContent: 'center',
  },
})