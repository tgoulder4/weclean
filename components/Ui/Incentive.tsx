import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import Pod from './Pod'
import Button, { ImpactProps } from './button'
import { IColour } from '../../lib/types'
import { spacing } from '../../lib/constants'
type IncentiveProps = {
  shadow?: boolean;
  legend?: string;
  blackText?: boolean;

  /**like [#value] or white */
  buttonColor: IColour;
  mainText: string;
  description: string;
  ctaButtonText: string;
  ctaImpact: ImpactProps;
  ctaAction: () => void;
  style?: StyleProp<ViewStyle>;
}
const Incentive = (props: IncentiveProps) => {
  const { style, blackText, mainText, description, ctaButtonText, legend, shadow, ctaAction, ctaImpact } = props
  //shadow-[inset_0px_8px_6px_0px_rgba(255,255,255,1)]
  return (
    <Pod customBorder={{ width: -2 }} style={[style, { borderWidth: 0, shadowRadius: 6, shadowOffset: { height: -8, width: -6 }, shadowColor: 'white', shadowOpacity: shadow ? 0.5 : 0 }]}>
      <View className=' flex flex-col gap-y-1 items-end'>
        {legend ?
          <Text className={`font-afa ${blackText ? 'text-black' : 'text-white'} opacity-50 w-full`}>{legend}</Text>
          : <></>}
        <Text className={`font-rubik text-lg w-full ${blackText ? 'text-black' : 'text-white'}`}>{mainText}</Text>
        <Text className={`font-afa text-base w-full tracking-tighter leading-tight ${blackText ? 'text-black' : 'text-white'}`}>{description}</Text>
        <Button style={{ marginTop: spacing.gaps.groupedElement }} type={ctaImpact} backgroundColour={props.buttonColor} textColor={`${blackText ? 'white' : 'black'}`} text={ctaButtonText} customOnPress={props.ctaAction} />
      </View>
    </Pod>
  )
}

export default Incentive