import { View, Text, Alert } from 'react-native'
import React from 'react'
import { Screen } from '../Screen'
import Incentive from '../Ui/Incentive'
import ActivityEvent from './Activity/ActivityEvent'

const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

const subtitle = <Text className='text-xs text-black font-bold'>chun lee baddies crew score: <Text className='text-red-700'>2.9★</Text></Text>
const getActivityEventsInDB = () => [{
  user: {
    name: "Mateusz"
  },
  userWhoMadeRequest: {
    name: "Tye",
    profileBackgroundColour: "indigo-500"
  },
  task: {
    eventSummary: "Moved their cutlery.",
    taskType: "Request"
  }
},
{
  user: {
    name: "Fin"
  },
  userWhoMadeRequest: {
    name: "Kate",
    profileBackgroundColour: "pink-500"
  },
  task: {
    eventSummary: "Cleared the sink.",
    taskType: "Courtesy"
  }
}]
const ActivityScreen = () => {
  return (
    <Screen title="Activity" subtitle={subtitle}>
      <View className='bg-yellow-500'>
        <Incentive shadow={true} backgroundColor="slate-900" ctaButtonText='GO PRO →' description="We get it, it's a pain. Create a rota in seconds with pro, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={createTwoButtonAlert} />
        <ActivityEvent task={{ eventSummary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", taskType: "Request" }} userWhoMadeRequest={{ name: "Tye", profileBackgroundColour: "indigo-500" }} user={{ name: "Mateusz" }} />
        <ActivityEvent task={{ eventSummary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", taskType: "Request" }} userWhoMadeRequest={{ name: "Tye", profileBackgroundColour: "indigo-500" }} user={{ name: "Mateusz" }} />
      </View>
    </Screen>
  )
}

export default ActivityScreen