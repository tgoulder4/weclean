import { View, Text } from 'react-native'
import React from 'react'
import Pod from './Pod'
import Button from './button'
type IncentiveProps = {
  shadow?: boolean;
  legend?: string;
  blackText?: boolean;

  /**like [#value] or white */
  backgroundColor: "black" | "white" | "yellow-500" | "green-500" | "blue-500" | "indigo-500" | "pink-500" | "red-500" | "gray-500";

  mainText: string;
  description: string;
  ctaButtonText: string;
  ctaAction: () => void;
}
const Incentive = (props: IncentiveProps) => {
  const { backgroundColor, blackText, mainText, description, ctaButtonText, legend, shadow, ctaAction } = props
  return (
    <Pod noStroke={true} backgroundColor={backgroundColor} additionalClasses={shadow ? 'shadow-[inset_0px_8px_6px_0px_rgba(255,255,255,1)]' : ''}>
      <View className=' flex flex-col gap-y-1 items-end'>
        {legend ?
          <Text className={`font-afa ${blackText ? 'text-black' : 'text-white'} opacity-50`}>{legend}</Text>
          : <></>}
        <Text className={`font-rubik text-base w-full ${blackText ? 'text-black' : 'text-white'}`}>{mainText}</Text>
        <Text className={`font-afa w-full tracking-tighter leading-tight ${blackText ? 'text-black' : 'text-white'}`}>{description}</Text>
        <Button backgroundColor={`${blackText ? 'black' : 'white'}`} textColor={`${blackText ? 'white' : 'black'}`} text={ctaButtonText} onPress={props.ctaAction} />
      </View>
    </Pod>
  )
}

export default Incentive