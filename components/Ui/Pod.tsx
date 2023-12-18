import { View, Text } from 'react-native'
import React from 'react'

type PodProps = {
  variant?: 'pod' | 'pod-media' | 'pod-media-pod';
  noStroke?: boolean;
  children: React.ReactNode;
  secondPodContent?: React.ReactNode;
  media?: React.ReactNode;
  backgroundColor: 'black' | 'white' | 'yellow-500' | 'green-500' | 'blue-500' | 'indigo-500' | 'pink-500' | 'red-500' | 'gray-500';
  additionalClasses?: string;
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
  const { noStroke, backgroundColor, media, variant, children, secondPodContent, additionalClasses } = podProps
  return (
    <View className={`mb-3 w-full bg-${backgroundColor} ${additionalClasses}  flex-1 border-4 border-black ${noStroke ? 'border-0' : ''} rounded-[20px]`}>
      <View className='hidden bg-black bg-white bg-yellow-500 bg-green-500 bg-blue-500 bg-indigo-500 bg-pink-500 bg-red-500 bg-gray-500' />
      <View className="p-6">
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