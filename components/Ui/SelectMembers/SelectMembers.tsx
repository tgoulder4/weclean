import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Member from './Member'
import { getProfileBackgroundColour, } from '../../../lib/backend/actions'
import { IColour, IUser } from '../../../lib/types'
//return the tsx and the count
export type SetSelectedMembers = {
    userIDs: string[]
}

const SelectMembers = (props: {
    setSelectedMembers: React.Dispatch<React.SetStateAction<string[]
    >>, _members: Array<IUser>, alreadySelectedMembers?: string[], _viewingMode: "edit" | "view"
}) => {
    const { setSelectedMembers, _members, alreadySelectedMembers, _viewingMode } = props;
    const [members, setMembers] = useState<Array<IUser>>(_members)
    console.log("members shown: ", members)
    const [viewingMode, setViewingMode] = useState(_viewingMode)
    return (
        <View className='flex flex-col flex-1'>
            <View className='flex flex-row'>
                {alreadySelectedMembers?.map((userID, index) => {
                    return (<Text key={userID} className='font-afa text-base mr-2'>{
                        members.find((member) => member.id == userID)?.name
                    }{index == alreadySelectedMembers.length - 1 ? "" : ","}</Text>)
                })}
            </View>
            <TextInput
                onChangeText={(text) => {
                    if (text == "") {
                        setMembers(_members)
                    }
                    else {
                        console.log("performing search...")
                        setMembers(members.filter((member) => member.name.toLowerCase().includes(text.toLowerCase())))
                    }
                }}
                placeholder='Search' className='py-2 px-3 rounded-lg mb-2 font-afaB text-base' style={{ backgroundColor: '#f3f4f6' }}></TextInput>
            <ScrollView horizontal={true} className='flex flex-row py-2 w-full'>
                {
                    //if there are no passed to this component yet, show loading members
                    _members.length == 0 ?
                        <>
                            <Member loading={true} user={{ name: "a", profileBackgroundColour: "b" as IColour, id: '0', crewID: ['0'], taskIDs: ['0'] }} />
                            <Member loading={true} user={{ name: "a", profileBackgroundColour: "b" as IColour, id: '0', crewID: ['0'], taskIDs: ['0'] }} />
                        </>
                        :
                        //if the rendered members length is 0, no search results were found
                        members.length == 0 ? <Text className='font-afa flex-1 w-48 text-base text-gray-400 h-24'>No members match this search criteria.</Text>
                            :
                            //else, render the members
                            members.map((member, index) =>
                                <Member alreadySelectedMembers={alreadySelectedMembers} setSelectedMembers={setSelectedMembers} key={member.id} user={{ name: member.name, profileBackgroundColour: member.profileBackgroundColour as IColour, id: member.id, crewID: ['0'], taskIDs: ['0'] }} />)
                }
            </ScrollView>
        </View>
    )
}

export default SelectMembers