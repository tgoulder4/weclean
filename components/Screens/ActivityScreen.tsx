import { View, Text, Alert, Image } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Incentive from '../Ui/Incentive'
import ActivityEvent from './Activity/ActivityEvent'
import { useNavigation } from '@react-navigation/native';


const subtitle = <Text className='text-xs text-black font-bold'>Chun lee baddies Crew Score: <Text className='text-red-700'>2.9★</Text></Text>
const ActivityScreen = () => {
  const navigation = useNavigation()
  return (
    <Screen title="Activity" subtitle={subtitle}>
      <View className={`hidden bg-transparent bg-[#1D1D1D] bg-[#55A38C] bg-[#4E9580] bg-[#4E9580]/10 bg-black bg-white bg-yellow-500 bg-green-500 bg-blue-500 bg-indigo-500 bg-pink-500 bg-red-500 bg-gray-500 bg-gray-200 bg-slate-900 bg-white/50 bg-[#310973] bg-[#C1C1C1] border-[#C1C1C1] bg-gray-200/50`} />

      <Incentive ctaImpact='heavy' shadow={true} backgroundColor="[#1D1D1D]" buttonColor='white' ctaButtonText='CREATE →' description="We get it, it's a pain. Create a rota in seconds, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={() => {
        navigation.navigate('Go Pro' as never, { andText: "can enter cash prize competitions." })
      }} />
      {/* activityEventsInLast24Hours.map */}
      <ActivityEvent task={{ summary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", type: "Request", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&", completionTime: "SLAYYY" }} usersWhoMadeRequest={[{ name: "Tye", profileBackgroundColour: "indigo-500" }]} user={{ name: "CAT" }} />
      <ActivityEvent task={{ summary: "Completed Tye's task: Clear the sink", type: "Courtesy", completionTime: "2m" }} usersWhoMadeRequest={[{ name: "Tye", profileBackgroundColour: "indigo-500" }]} user={{ name: "Mateusz" }} />
      {
        // olderEvents?.map
      }
      <Text className='font-rubik text-xl'>Older events</Text>
      <ActivityEvent task={{ summary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaabaaaaa", type: "Request", completionTime: "wha" }} usersWhoMadeRequest={[{ name: "Tye", profileBackgroundColour: "indigo-500" }, { name: "Tye", profileBackgroundColour: "indigo-500" }, { name: "Tye", profileBackgroundColour: "indigo-500" }]} user={{ name: "Mateusz" }} />
    </Screen>
  )
}

export default ActivityScreen