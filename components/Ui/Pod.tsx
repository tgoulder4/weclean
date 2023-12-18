import { View, Text } from 'react-native'
import React from 'react'
import { IColour } from '../../App';

type PodProps = {
  variant?: 'pod' | 'pod-media' | 'pod-media-pod';
  noStroke?: boolean;
  children: React.ReactNode;
  secondPodContent?: React.ReactNode;
  media?: React.ReactNode;
  backgroundColor: IColour;
  className?: string;
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
  const { noStroke, backgroundColor, media, variant, children, secondPodContent, className } = podProps
  return (
    <View className={`mb-3 w-full bg-${backgroundColor} ${className}  flex-1 border-4 border-black ${noStroke ? 'border-0' : ''} rounded-[20px]`}>
      <View className="px-5 py-6">
        {children}
      </View>
      {media ?
        <View className={`${getMediaRoundedCorners(variant)}`}>
          {media}
        </View> : <></>}
      {variant === 'pod-media-pod' ?
        <View className="p-7">
          {secondPodContent}
        </View>
        : <></>}
    </View>
  )
}

export default Pod