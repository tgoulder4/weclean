import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Member from './Member'
import { getProfileBackgroundColour, } from '../../../lib/backend/actions'
import { IColour, IUser } from '../../../lib/types'
import { spacing } from '../../../lib/constants'
import { userIDLoggedIn } from '../../../lib/globals'
//return the tsx and the count
export type SetSelectedMembers = {
    userIDs: string[]
}

const SelectMembers = (props: {
    setSelectedMembers: React.Dispatch<React.SetStateAction<string[]
    >>, action: string, _members: Array<IUser>, alreadySelectedMembers?: string[], _viewingMode: "edit" | "view"
}) => {
    const { action, setSelectedMembers, _members, alreadySelectedMembers, _viewingMode } = props;
    const [members, setMembers] = useState<Array<IUser>>(_members)
    const [viewingMode, setViewingMode] = useState(_viewingMode)
    const names: string[] = alreadySelectedMembers?.map(userID => {
        if (userID == userIDLoggedIn) return ""
        const _name = _members.find(_member => _member.id == userID)?.name;
        if (_name) return _name;
        else return ""
    }).filter(name => name != "") as string[]
    return (
        <View style={{ rowGap: spacing.gaps.smaller }} className='flex flex-col flex-1'>
            <View className='flex flex-row'>
                {
                    names.length > 0 ?
                        <Text className='font-afa text-base'>{action} {names?.join(", ")}</Text> : <Text className='font-afa text-gray-300 text-base'>No one else selected</Text>
                }
            </View>
            <TextInput clearButtonMode='unless-editing'
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
            <ScrollView horizontal={true} className='flex flex-row py-2 mt-[-1] w-full'>
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