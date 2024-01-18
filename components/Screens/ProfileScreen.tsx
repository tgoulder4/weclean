import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Pod from '../Ui/Pod'

const ProfileScreen = () => {
    return (
        <Screen title='Profile' largerTitle={true}>
            <Text>Profile</Text>
        </Screen>
    )
}

export default ProfileScreen