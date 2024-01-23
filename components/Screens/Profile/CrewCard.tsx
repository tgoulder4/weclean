import { View, Text } from 'react-native'
import React from 'react'
import { colours } from '../../../lib/constants'

const CrewCard = (props: { isPro?: boolean, crewName: string, crewMemberSinceDate: string, hasChevron?: boolean }) => {
    const { isPro, crewName, crewMemberSinceDate, hasChevron } = props
    return (
        <View style={{ backgroundColor: colours.light.primary }}>
            <Text>CrewCard</Text>
        </View>
    )
}

export default CrewCard