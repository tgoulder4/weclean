import { View, Text } from 'react-native'
import React from 'react'

type PodProps = {
  variant?: 'pod-media' | 'pod-media-pod';
  noStroke?: boolean;
  podContent: React.ReactNode;
  secondPodContent?: React.ReactNode;
  media: React.ReactNode;
}
function getMediaRoundedCorners(variant: PodProps['variant']) {
  switch (variant) {
    case 'pod-media':
      return 'rounded-b-[20px]'
    case 'pod-media-pod':
      return ''
    default:
      return ''
  }
}
const Pod = (props: PodProps) => {
  return (
    <View className={`${props.noStroke ? 'outline outline-4 outline-black' : ''} rounded-[20px]`}>
      <View className="p-7">
        {props.podContent}
      </View>
      {props.media ?
        <View className={`${getMediaRoundedCorners(props.variant)}`}>
          {props.media}
        </View> : <></>}
      {props.variant === 'pod-media-pod' ?
        <View className="p-7">
          {props.secondPodContent}
        </View>
        : <></>}
    </View>
  )
}

export default Pod