import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Info from '../Ui/Info'
import Task from './Tasks/Task'

const TasksScreen = () => {
    return (
        <Screen title='Tasks'>
            <Info backgroundColour='[#4E9580]/10' description="Thanks for completing your tasks - you're contributing to a cleaner and healthier area for all crew members!"></Info>
            <Task task={{ summary: "Clear kitchen sink", type: "Request", promiseTime: "23:01", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" }} />
            <Info backgroundColour='white/50' title='Reached peak performance!📈' description="Everyone in your crew has finished their tasks on time today. Keep it going!"></Info>
            <Text className='font-rubik text-xl mb-4'>Crew</Text>
            <Task task={{ summary: "Clear kitchen sink", type: "Request", promiseTime: "23:01", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" }} />
            <Task task={{ summary: "Ads help support WeCleen's mission", type: "Request", promiseTime: "Advertisment", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" }} />
        </Screen>
    )
}

export default TasksScreen