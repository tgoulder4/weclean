import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
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
    >>, _members: Array<IUser>, alreadySelectedMembers?: string[], _viewingMode: "edit" | "view"
}) => {
    const { setSelectedMembers, _members, alreadySelectedMembers, _viewingMode } = props;
    const [members, setMembers] = useState<Array<IUser>>(_members)
    const [viewingMode, setViewingMode] = useState(_viewingMode)
    return (
        <View className='flex flex-col flex-1'>

            <TextInput
                onChangeText={(text) => {
                    if (text == "") {
                        setMembers(_members)
                    }
                    else {
                        setMembers(_members.filter((member) => member.name.toLowerCase().includes(text.toLowerCase())))
                    }
                }}
                placeholder='Search' className='py-2 px-3 rounded-lg mb-2 font-afaB text-base' style={{ backgroundColor: '#f3f4f6' }}></TextInput>
            <ScrollView horizontal={true} className='flex flex-row py-2 w-full'>
                {
                    _members.length == 0 ?
                        <>
                            <Member loading={true} user={{ name: "a", profileBackgroundColour: "b" as IColour, id: '0', crewID: ['0'], taskIDs: ['0'] }} />
                            <Member loading={true} user={{ name: "a", profileBackgroundColour: "b" as IColour, id: '0', crewID: ['0'], taskIDs: ['0'] }} />
                        </> :
                        members.map((member, index) =>
                            <Member alreadySelectedMembers={alreadySelectedMembers} setSelectedMembers={setSelectedMembers} key={index} user={{ name: member.name, profileBackgroundColour: member.profileBackgroundColour as IColour, id: member.id, crewID: ['0'], taskIDs: ['0'] }} />)
                }
            </ScrollView>
        </View>
    )
}

export default SelectMembers