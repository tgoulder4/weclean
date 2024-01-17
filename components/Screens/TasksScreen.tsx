import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Screen } from '../ScreenFactory'
import Info from '../Ui/Info'
import Task from './Tasks/Task'
import Advertisement from './Tasks/Advertisement'
import { spacing } from '../../lib/constants'
import { getLast24hrCrewTasks } from '../../lib/backend/actions'

const TasksScreen = () => {

    //crewID should be passed in as a prop, like a URL but for now it's hardcoded
    const crewID = 'C1';

    useEffect(() => {
        async function main() {
            await getLast24hrCrewTasks(crewID);
        }
        main()
    })
    return (
        <Screen title='Tasks'>
            <Info backgroundColour='#4E9580' description="Thanks for completing your tasks - you're contributing to a cleaner and healthier area for all crew members!"></Info>
            <Task task={{ summary: "Clear kitchen sink", type: "Request", promiseTime: "23:01", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" }} />
            <Info backgroundColour='yellow' title='Reached peak performance!📈' description="Everyone in your crew has finished their tasks on time today. Keep it going!"></Info>
            <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>
                <Text className='font-rubik text-xl'>Crew tasks</Text>
                <Task task={{ summary: "Clear kitchen sink", type: "Request", promiseTime: "23:01", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" }} />
                <Advertisement media="https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" />
            </View>
        </Screen>
    )
}

export default TasksScreen