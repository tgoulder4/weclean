import { View, Text, Alert } from 'react-native'
import React from 'react'
import { Screen } from '../Screen'
import Incentive from '../Ui/Incentive'
import ActivityEvent from './Activity/ActivityEvent'

const subtitle = <Text className='text-xs text-black font-bold'>chun lee baddies crew score: <Text className='text-red-700'>2.9★</Text></Text>
const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
const content = () => {
  return (
    <View className='bg-yellow-500'>
      <Incentive shadow={true} backgroundColor="slate-900" ctaButtonText='GO PRO →' description="We get it, it's a pain. Create a rota in seconds with pro, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={createTwoButtonAlert} />
      <ActivityEvent task={{ eventSummary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", taskType: "Request" }} user={{ name: "Mateusz", profileBackgroundColour: "[#55A38C]" }} />
    </View>
  )
}
const ActivityScreen = () => {
  return (
    <Screen title="Activity" subtitle={subtitle} content={content()} />
  )
}

export default ActivityScreen