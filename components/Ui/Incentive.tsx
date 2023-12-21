import { View, Text } from 'react-native'
import React from 'react'
import Pod from './Pod'
import Button, { ImpactProps } from './button'
import { IColour } from '../../App'
type IncentiveProps = {
  shadow?: boolean;
  legend?: string;
  blackText?: boolean;

  /**like [#value] or white */
  backgroundColor: IColour;
  buttonColor: IColour;
  className?: string;
  mainText: string;
  description: string;
  ctaButtonText: string;
  ctaImpact: ImpactProps;
  ctaAction: () => void;
}
const Incentive = (props: IncentiveProps) => {
  const { blackText, backgroundColor, mainText, description, ctaButtonText, legend, shadow, ctaAction, className, ctaImpact } = props
  return (
    <Pod backgroundColour={backgroundColor} noStroke={true} shadow={shadow ? true : false}>
      <View className=' flex flex-col gap-y-1 items-end'>
        {legend ?
          <Text className={`font-afa ${blackText ? 'text-black' : 'text-white'} opacity-50 w-full`}>{legend}</Text>
          : <></>}
        <Text className={`font-rubik text-base w-full ${blackText ? 'text-black' : 'text-white'}`}>{mainText}</Text>
        <Text className={`font-afa w-full tracking-tighter leading-tight ${blackText ? 'text-black' : 'text-white'}`}>{description}</Text>
        <Button type={ctaImpact} hasTopMargin={true} backgroundColour={props.buttonColor} textColor={`${blackText ? 'white' : 'black'}`} text={ctaButtonText} onPress={props.ctaAction} />
      </View>
    </Pod>
  )
}

export default Incentive