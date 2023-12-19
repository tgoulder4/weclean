import { View, Text, Alert, Image } from 'react-native'
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
const getActivityEventsInDB = () => {

}
const ActivityScreen = () => {
  return (
    <Screen title="Activity" subtitle={subtitle}>
      <Incentive shadow={true} backgroundColor="slate-900" buttonColor='white' ctaButtonText='GO PRO →' description="We get it, it's a pain. Create a rota in seconds with pro, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={createTwoButtonAlert} />
      {/* activityEventsInLast24Hours.map */}
      <ActivityEvent task={{ summary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", type: "Request", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&", completionTime: "SLAYYY" }} userWhoMadeRequest={{ name: "Tye", profileBackgroundColour: "indigo-500" }} user={{ name: "CAT" }} />
      <ActivityEvent task={{ summary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", type: "Request", completionTime: "wha" }} userWhoMadeRequest={{ name: "Tye", profileBackgroundColour: "indigo-500" }} user={{ name: "Mateusz" }} />
      {
        // olderEvents?.map
      }
      <Text className='font-rubik text-xl'>Older events</Text>
      <ActivityEvent task={{ summary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", type: "Request", completionTime: "wha" }} userWhoMadeRequest={{ name: "Tye", profileBackgroundColour: "indigo-500" }} user={{ name: "Mateusz" }} />
    </Screen>
  )
}

export default ActivityScreen