import React from 'react'
import { View,Text} from 'react-native'

type Props = {
  screenName: string;
  
}
export const Screen = (props:Props) => {
  return (
    <>
    <Text className='text-sm text-black font-bold'>{props.screenName}</Text>
    <View className="flex-1 flex items-center justify-start bg-red-500">
        <Text>Crew_activity</Text>
        <Text>Monthly_competition</Text>
        <Text>Rotational_incentive</Text>
    </View>
    </>
  )
}
