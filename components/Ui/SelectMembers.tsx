import { View, Text } from 'react-native'
import React from 'react'
//return the tsx and the count
export type SetSelectedMembers = {
    count: number,
    userIDs: string[]
}
const SelectMembers = (props: {
    setSelectedMembers: React.Dispatch<React.SetStateAction<{
        count: number;
        userIDs: never[];
    }>>
}) => {
    return (
        <View>
            <Text>Search</Text>
            <Text>Select</Text>
        </View>
    )
}

export default SelectMembers