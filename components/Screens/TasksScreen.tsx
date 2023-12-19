import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from '../Screen'
import Info from '../Ui/Info'

const TasksScreen = () => {
    return (
        <Screen title='Tasks'>
            <Info backgroundColor='[#4E9580]/50' description="Thanks for completing your tasks - you're contributing to a cleaner and healthier area for all crew members!"></Info>
        </Screen>
    )
}

export default TasksScreen