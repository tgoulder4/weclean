import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Screen } from '../ScreenFactory'
import Incentive from '../Ui/Incentive'
import ActivityEvent from './Activity/ActivityEvent'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native'
import { spacing } from '../../lib/constants'
import { fetchCompletedTasksInRange } from '../../app/backend/actions'
import { ITask } from '../../lib/types'
import { UserAndCrewContext } from '../Context/Context'
import { isAfter, isBefore } from 'date-fns'
import PlaceholderPod from '../Ui/PlaceholderPod'
var equal = require('deep-equal')

const subtitle = <Text className='text-xs text-black font-bold'>Chun lee baddies Crew Score: <Text className='text-red-700'>2.9★</Text></Text>
const ActivityScreen = () => {
  //get crew info from local storage then use the task ids to get the tasks from the server
  const [events, setEvents] = useState({ recent: [{} as ITask], older: [{} as ITask] } as null | { recent: ITask[], older: ITask[] });
  const userAndCrewContext = useContext(UserAndCrewContext);
  const crewID = userAndCrewContext.currentCrewID;
  console.log("crewID from context: ", crewID)
  useEffect(() => {
    async function main() {
      // get taskIDs from db, these are trimmed to contain only the last week each day
      await fetchCompletedTasksInRange(crewID, 0, 7).then((tasks: ITask[] | null) => {
        if (!tasks) return null;
        console.log("tasks: ", tasks)
        tasks.sort((a, b) => {
          return isBefore(a.markedAsCompletedAt!, b.markedAsCompletedAt!) ? 1 : -1
        })
        const recentTasks = tasks.filter((task) => {
          return isAfter(task.markedAsCompletedAt!, 24)
        })
        const olderTasks = tasks.filter((task) => {
          return isBefore(task.markedAsCompletedAt!, 24)
        })
        console.log("setting events to: ",
          {
            recent: recentTasks || [],
            older: olderTasks || []
          }
        )
        setEvents(
          {
            recent: recentTasks || [],
            older: olderTasks || []
          }
        )
      })
      //split tasks into recent and older, where recent is last 24hrs. use date-fns to do this


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
            <PlaceholderPod />
            <PlaceholderPod />
            <PlaceholderPod />
          </> :
            equal([{} as ITask], events.recent) ? <Text>No recent crew activity</Text> :
              <>{
                events.recent.map((event) => {
                  console.log("key: ", event.id)
                  return <ActivityEvent key={event.id} event={event} name={event.name} />
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
          events == null ? <></> :
            equal([{} as ITask], events.older) ? <Text className='text-base text-gray-400'>No older crew activity</Text> :
              <>
                <Text className='font-rubik text-xl'>Older events</Text>
                {
                  events.older.map((event) => {
                    console.log("key: ", event.id)
                    return <ActivityEvent key={event.id} event={event} name={event.name} />
                  })
                }
              </>
        }
      </View>
    </Screen>
  )
}

export default ActivityScreen