import { View, Text, Image } from 'react-native'
import React from 'react'
import { IColour } from '../../lib/constants';

type PodProps = {
  variant?: 'pod' | 'pod-media' | 'pod-media-pod';
  noStroke?: boolean;
  children: React.ReactNode;
  bottomPodContent?: React.ReactNode;
  media?: string;
  backgroundColour: IColour;
  shadow?: boolean;
  strokeColour?: IColour;
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
const Pod = (podProps: PodProps) => {
  const { noStroke, shadow, backgroundColour, media, variant, children, bottomPodContent, strokeColour } = podProps;
  return (
    <View className={`mb-3 w-full flex flex-col bg-${backgroundColour} border-4 ${shadow ? 'shadow-[inset_0px_8px_6px_0px_rgba(255,255,255,1)]' : ''} ${strokeColour ? 'border-' + strokeColour : 'border-black'}  ${noStroke ? 'border-0' : ''} rounded-[20px]`}>
      <View className="px-5 py-6">
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