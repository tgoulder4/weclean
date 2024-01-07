import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Member from './Member'
import { getProfileBackgroundColour, } from '../../../lib/backend/actions'
import { IColour, IUser } from '../../../lib/types'
//return the tsx and the count
export type SetSelectedMembers = {
    count: number,
    userIDs: string[]
}

const SelectMembers = (props: {
    setSelectedMembers: React.Dispatch<React.SetStateAction<string[]
    >>, members: Array<IUser>
}) => {
    return (
        <View className='flex flex-col flex-1'>
            <TextInput placeholder='Search' className='py-4 px-3 rounded-lg mb-2 font-afaB' style={{ backgroundColor: '#f3f4f6' }}></TextInput>
            <ScrollView horizontal={true} className='flex flex-row pt-2 w-full'>
                {
                    props.members.length == 0 ? <Member loading={true} user={{ name: "a", profileBackgroundColour: "b" as IColour, id: '0', crewID: ['0'], taskIDs: ['0'] }} /> :
                        props.members.map((member, index) =>
                            <Member setSelectedMembers={props.setSelectedMembers} key={index} user={{ name: member.name, profileBackgroundColour: member.profileBackgroundColour as IColour, id: member.id, crewID: ['0'], taskIDs: ['0'] }} />)
                }
            </ScrollView>
        </View>
    )
}

export default SelectMembers