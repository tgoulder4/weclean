import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Info from '../Ui/Info'
import Task from './Tasks/Task'

const TasksScreen = () => {
    return (
        <Screen title='Tasks'>
            <Info backgroundColour='[#4E9580]/50' description="Thanks for completing your tasks - you're contributing to a cleaner and healthier area for all crew members!"></Info>
            <Task task={{ summary: "Clear kitchen sink", type: "Request", promiseTime: "23:01" }} />
            <Info backgroundColour='white/50' title='Reached peak performance!📈' description="Everyone in your crew has finished their tasks on time today. Keep it going!"></Info>
        </Screen>
    )
}

export default TasksScreen