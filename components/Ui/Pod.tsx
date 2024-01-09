import { View, Text, Image, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { IColour } from '../../lib/types';

type PodProps = {
  variant?: 'pod' | 'pod-media' | 'pod-media-pod';
  children: React.ReactNode;
  bottomPodContent?: React.ReactNode;
  media?: string;
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
  //to do here: if want shadow, pass it to style
  return (
    <View style={[style, { borderWidth: customBorder?.width || 4, borderColor: customBorder?.colour || 'black' }]} className={`w-full flex flex-col rounded-[20px]`}>
      <View style={customPadding ? { paddingHorizontal: customPadding.paddingX, paddingVertical: customPadding.paddingY } : { paddingHorizontal: 20, paddingVertical: 24 }}
      // className={customPadding?`px-5 py-6`}
      >
        {children}
      </View>
      {podProps.variant == "pod-media" || podProps.variant == "pod-media-pod" ?
        <View className={`bg-indigo-500 ${getMediaRoundedCorners(variant)}`}>
          <Image className={`w-full max-h-52 aspect-video object-cover ${getMediaRoundedCorners(variant)}`} source={{ uri: media }} />
        </View> : <></>}
      {variant === 'pod-media-pod' ?
        <View className="px-5 py-6 mt-[-10px]">
          {bottomPodContent}
        </View>
        : <></>}
    </View>
  )
}

export default Pod