import { View, Text, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Screen } from '../ScreenFactory'
import Incentive from '../Ui/Incentive'
import ActivityEvent from './Activity/ActivityEvent'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native'
import { colours, spacing } from '../../lib/constants'
import { getCrewInfo, getTasksFromTaskIDs, getUserFromUserID } from '../../lib/backend/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ICrew, ITask } from '../../lib/types'
import Pod from '../Ui/Pod'
import { PulseComponent } from '../Ui/animations'
import PlaceholderActivityEvent from './Activity/PlaceholderActivityEvent'
var equal = require('deep-equal')

const subtitle = <Text className='text-xs text-black font-bold'>Chun lee baddies Crew Score: <Text className='text-red-700'>2.9★</Text></Text>
const ActivityScreen = () => {
  //get crew info from local storage then use the task ids to get the tasks from the server
  const [events, setEvents] = useState(null as null | { recent: ITask[], older: ITask[] });


  useEffect(() => {
    async function main() {
      // get taskIDs from db, these are trimmed to contain only the last week each day
      const tasks = await getCrewInfo("C1").then((crewInfo: ICrew | null) => {
        //get tasks from members where crewID = c1 and userID is memberid
        if (!crewInfo) return null;
        return crewInfo.tasks
      });
      if (tasks) {
        console.log("setting tasks to " + tasks)
        setEvents(
          {
            recent: tasks.slice(0, 3),
            older: tasks.slice(3, tasks.length)
          }
        )
      } else {
        console.error("taskIDs is null - does the crew ID exist?")
      }
    }
    main()
  }, [])

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <Screen title="Activity" subtitle={subtitle}>
      {/* <View className={`hidden outline-2 bg-transparent border-gray-200/50 bg-[#1D1D1D] bg-[#55A38C] bg-[#4E9580] bg-[#4E9580]/10 bg-black bg-white bg-yellow-500 bg-green-500 bg-blue-500 bg-indigo-500 bg-pink-500 bg-red-500 bg-gray-500 bg-gray-200 bg-slate-900 bg-white/50 bg-[#310973] bg-[#C1C1C1] border-[#C1C1C1] bg-gray-200/50 bg-[#DDEDEE] bg-[#3171EF]/30`} /> */}

      <Incentive style={{ backgroundColor: '#1D1D1D' }} ctaImpact='heavy' shadow={true} buttonColor='white' ctaButtonText='CREATE →' description="We get it, it's a pain. Create a rota in seconds, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={() => {
        navigation.navigate({ name: 'Go Pro' as never, params: { andText: "can enter cash prize competitions." } } as never)
      }} />
      <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>
        {
          events == null ? <>
            <PlaceholderActivityEvent />
            <PlaceholderActivityEvent />
            <PlaceholderActivityEvent />
          </> :
            equal([] as ITask[], events) ? <Text>No recent crew activity</Text> :
              <>{
                events.recent.map((event) => {
                  return <ActivityEvent key={event.id} event={event} name="need to get name!" />
                })
              }
              </>
        }
      </View>
      <Incentive style={{ backgroundColor: '#1D1D1D' }} ctaImpact='heavy' shadow={true} buttonColor='white' ctaButtonText='CREATE →' description="We get it, it's a pain. Create a rota in seconds, boosting your crew's productivity." mainText='Messy housemates?' ctaAction={() => {
        navigation.navigate({ name: 'Go Pro' as never, params: { andText: "can enter cash prize competitions." } } as never)
      }} />
      <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>
        {
          events == null ? <>
            {/* <PlaceholderActivityEvent />
            <PlaceholderActivityEvent />
            <PlaceholderActivityEvent /> */}
          </> :
            equal([] as ITask[], events.older) ? <Text className='text-base text-gray-400'>No older crew activity</Text> :
              <>
                <Text className='font-rubik text-xl'>Older events</Text>
                {
                  events.older.map((event) => {
                    return <ActivityEvent key={event.id} event={event} name="need to get name!" />
                  })
                }
              </>
        }
      </View>
    </Screen>
  )
}

export default ActivityScreen