import { View, Text, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Screen } from '../ScreenFactory'
import Incentive from '../Ui/Incentive'
import ActivityEvent from './Activity/ActivityEvent'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native'
import { spacing } from '../../lib/constants'
import { getTasksFromTaskIDs } from '../../lib/backend/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ICrew, ITask } from '../../lib/types'
var equal = require('deep-equal')

const subtitle = <Text className='text-xs text-black font-bold'>Chun lee baddies Crew Score: <Text className='text-red-700'>2.9★</Text></Text>
const ActivityScreen = () => {
  //get crew info from local storage then use the task ids to get the tasks from the server
  const [tasks, setTasks] = useState(null as null | ITask[])
  useEffect(() => {
    async function main() {
      const taskIDs = await AsyncStorage.getItem("crewInfo").then((_crewInfo: string | null) => {
        const crewInfo = JSON.parse(_crewInfo || "{}") as ICrew
        return crewInfo?.taskIDs
      })
      const tasks = await getTasksFromTaskIDs(taskIDs);
      setTasks(tasks)
    }
    main()
  })

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <Screen title="Activity" subtitle={subtitle}>
      {/* <View className={`hidden outline-2 bg-transparent border-gray-200/50 bg-[#1D1D1D] bg-[#55A38C] bg-[#4E9580] bg-[#4E9580]/10 bg-black bg-white bg-yellow-500 bg-green-500 bg-blue-500 bg-indigo-500 bg-pink-500 bg-red-500 bg-gray-500 bg-gray-200 bg-slate-900 bg-white/50 bg-[#310973] bg-[#C1C1C1] border-[#C1C1C1] bg-gray-200/50 bg-[#DDEDEE] bg-[#3171EF]/30`} /> */}

      <Incentive style={{ backgroundColor: '#1D1D1D' }} ctaImpact='heavy' shadow={true} buttonColor='white' ctaButtonText='CREATE →' description="We get it, it's a pain. Create a rota in seconds, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={() => {
        navigation.navigate({ name: 'Go Pro' as never, params: { andText: "can enter cash prize competitions." } } as never)
      }} />
      {/* activityEventsInLast24Hours.map */}
      <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>
        {
          tasks == null ? <>
            {/* loading glyph */}
          </> :
            equal([] as ITask[], tasks) ? <Text>No recent crew activity</Text> :
              <>
                {/* map activity events */}
              </>
        }

        <ActivityEvent task={{ summary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaaaaaaa", type: "Request", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&", completionTime: "SLAYYY" }} usersWhoMadeRequest={[{ name: "Tye", profileBackgroundColour: "indigo-500" }]} user={{ name: "CAT" }} />
        <ActivityEvent task={{ summary: "Completed Tye's task: Clear the sink", type: "Courtesy", completionTime: "2m" }} usersWhoMadeRequest={[{ name: "Tye", profileBackgroundColour: "indigo-500" }]} user={{ name: "Mateusz" }} />
        {
          // olderEvents?.map
        }
      </View>
      <Incentive style={{ backgroundColor: '#1D1D1D' }} ctaImpact='heavy' shadow={true} buttonColor='white' ctaButtonText='CREATE →' description="We get it, it's a pain. Create a rota in seconds, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={() => {
        navigation.navigate({ name: 'Go Pro' as never, params: { andText: "can enter cash prize competitions." } } as never)
      }} />
      <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>

        <Text className='font-rubik text-xl'>Older events</Text>
        <ActivityEvent task={{ summary: "Moved their cutlery.aaaaaaaaaaaaaaaaaaaaabaaaaa", type: "Request", completionTime: "wha" }} usersWhoMadeRequest={[{ name: "Tye", profileBackgroundColour: "indigo-500" }, { name: "Tye", profileBackgroundColour: "indigo-500" }, { name: "Tye", profileBackgroundColour: "indigo-500" }]} user={{ name: "Mateusz" }} />
      </View>
    </Screen>
  )
}

export default ActivityScreen