import { View, Text, Image, StyleProp, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { IColour } from '../../lib/types';
import Svg, { G, Path } from 'react-native-svg';
import * as Animatable from 'react-native-animatable';
import { PulseComponent, SpinComponent, pulse } from './animations';
import { spacing } from '../../lib/constants';
type PodProps = {
  variant?: 'pod' | 'pod-media' | 'pod-media-pod';
  children: React.ReactNode;
  bottomPodContent?: React.ReactNode;
  media?: string | React.ReactNode;
  style?: StyleProp<ViewStyle>;
  customPadding?: { paddingX?: number, paddingY?: number };
  customBorder?: { colour?: string, width?: number };
}
function getMediaRoundedCorners(variant: PodProps['variant']) {
  switch (variant) {
    case 'pod-media':
      return 'rounded-b-[20px]'
    case 'pod-media-pod':
      return ''
    case 'pod':
      return ''
  }
}
/**
 * 
 * @param podProps style is for outer podwrapper ONLY. do not apply padding here - use customPadding instead
 * @returns 
 */
const Pod = (podProps: PodProps) => {
  const { style, customBorder, customPadding, media, variant, children, bottomPodContent } = podProps;
  const [mediaLoading, setMediaLoading] = useState(true);
  //to do here: if want shadow, pass it to style
  return (
    <View style={[style, { borderWidth: customBorder?.width || 4, borderColor: customBorder?.colour || 'black' }]} className={`w-full flex flex-col rounded-[20px]`}>
      <View style={[{ rowGap: spacing.gaps.separateElement }, customPadding ? { paddingHorizontal: customPadding.paddingX, paddingVertical: customPadding.paddingY } : { paddingHorizontal: 20, paddingVertical: 24 }]}
      // className={customPadding?`px-5 py-6`}
      >
        {children}
      </View>
      {podProps.variant == "pod-media" || podProps.variant == "pod-media-pod" ?
        <View className={`relative flex items-center justify-center ${getMediaRoundedCorners(variant)}`}>
          <Image className={`w-full max-h-52 aspect-video object-cover ${getMediaRoundedCorners(variant)}`}
            source={{ uri: typeof media === 'string' ? media : undefined }}
            onLoadEnd={
              () => {
                setMediaLoading(false)
              }
            } />
          {
            mediaLoading ?
              <View style={{ borderBottomRightRadius: variant == 'pod-media' ? 17 : variant == 'pod-media-pod' ? 0 : 0, borderBottomLeftRadius: variant == 'pod-media' ? 17 : variant == 'pod-media-pod' ? 0 : 0 }} className="absolute bg-gray-300 rounded-b-[17px] w-full h-full flex items-center justify-center aspect-video object-cover">
                <SpinComponent>
                  <Svg viewBox="0 -960 960 960" height="24" width="24"><Path d="M480-46q-90 0-168.969-34.076-78.968-34.075-137.924-93.031T80.076-311.031Q46-390 46-480q0-90.142 34.064-168.881t93-137.929Q232-846 311-880t169-34q26 0 44.5 18.5T543-851q0 26-18.5 44.5T480-788q-128.013 0-218.006 89.991Q172-608.018 172-480.009 172-352 261.991-262t218 90Q608-172 698-261.994 788-351.987 788-480q0-26 18.5-44.5T851-543q26 0 44.5 18.5T914-480q0 90-34.064 169.012t-93 138Q728-114 649.14-80 570.281-46 480-46Z" /></Svg>
                </SpinComponent>
              </View>
              : <></>

          }
        </View>

        : <></>}
      {variant === 'pod-media-pod' ?
        <View className="px-5 py-6 mt-[-10px]">
          {bottomPodContent}
        </View>
        : <></>}
    </View>
  )
}

export default Pod