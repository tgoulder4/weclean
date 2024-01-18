import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Member from './Member'
import { getProfileBackgroundColour, getUsersInCrew, } from '../../../lib/backend/actions'
import { IColour, IUser } from '../../../lib/types'
import { colours, spacing } from '../../../lib/constants'
import { userIDLoggedIn } from '../../../lib/globals'
//return the tsx and the count
export type SetSelectedMembers = {
    userIDs: string[]
}

/**
 * 
 * @param props _members is the passed members. members is the members that are rendered.
 * @returns 
 */
const SelectMembers = (props: {
    setSelectedMembers: React.Dispatch<React.SetStateAction<string[]
    >>, action: string, _members?: Array<IUser>, alreadySelectedMembers?: string[], _viewingMode: "edit" | "view", maxMemers?: number, darkMode?: boolean, mustInclude?: string[], dontShow?: string[]
}) => {
    const { action, setSelectedMembers, _members, alreadySelectedMembers, _viewingMode } = props;
    const [OriginalMembers, setOriginalMembers] = useState<Array<IUser>>(_members ? _members : [] as IUser[]);
    console.log("OriginalMembers: ", OriginalMembers);
    const [members, setMembers] = useState<Array<IUser>>(OriginalMembers);
    const [viewingMode, setViewingMode] = useState(_viewingMode);

    //this should be passed into the screen as a prop, as if it were a URL.
    const userIDLoggedIn = "GHI789";

    console.log("viewingMode: ", viewingMode);
    console.log("_members: ", _members);
    const names: string[] = alreadySelectedMembers?.map(userID => {
        if (userID == userIDLoggedIn) return ""
        const _name = OriginalMembers.find(_member => _member.id == userID)?.name;
        if (_name) return _name;
        else return ""
    }).filter(name => name != "") as string[];
    async function main() {
        const mem = await getUsersInCrew("C1", userIDLoggedIn);
        setOriginalMembers(mem)
        setMembers(mem);
    }
    //if the members aren't passed, get users in crew from backend
    useEffect(() => {
        if (!props._members) main();
    }, []
    )
    return (
        <View style={{ rowGap: spacing.gaps.groupedElement }} className='flex flex-col flex-1'>
            <View className='flex flex-row'>
                {
                    names.length > 0 ?
                        <Text style={{ color: props.darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-afa text-base'>{action} {names?.join(", ")}</Text> : <Text style={{ color: colours.dark.textSecondary }} className='font-afaB text-base'>No one else selected</Text>
                }
            </View>
            {viewingMode == "edit" ?

                <TextInput clearButtonMode='always'
                    onChangeText={(text) => {
                        if (text == "") {
                            setMembers(OriginalMembers)
                        }
                        else {
                            console.log("performing search...")
                            setMembers(members.filter((member) => member.name.toLowerCase().includes(text.toLowerCase())))
                        }
                    }}
                    placeholder='Search' className='py-2 px-3 rounded-lg mb-2 font-afaB text-base' style={{ backgroundColor: props.darkMode ? colours.dark.input.background : colours.light.input.background, color: props.darkMode ? colours.dark.textPrimary : colours.light.textPrimary }}></TextInput> : <></>
            }
            <ScrollView style={{ backgroundColor: props.darkMode ? colours.dark.background : colours.light.background }} horizontal={true} className='flex flex-row py-2 mt-[-1] w-full'>
                {
                    viewingMode == "edit" ?
                        //if there are no passed to this component yet, show loading members
                        OriginalMembers.length == 0 ?
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
                                    <Member maxMembers={props.maxMemers} mustInclude={props.mustInclude} darkMode={props.darkMode} setViewingMode={setViewingMode} alreadySelectedMembers={alreadySelectedMembers} setSelectedMembers={setSelectedMembers} key={member.id} user={{ name: member.name, profileBackgroundColour: member.profileBackgroundColour as IColour, id: member.id, crewID: ['0'], taskIDs: ['0'] }} />) :
                        //else, render the selected members only
                        alreadySelectedMembers?.map((userID, index) => {

                            const member = OriginalMembers.find(_member => _member.id == userID);
                            if (member) {
                                return <Member maxMembers={props.maxMemers} mustInclude={props.mustInclude} darkMode={props.darkMode} setViewingMode={setViewingMode} alreadySelectedMembers={alreadySelectedMembers} setSelectedMembers={setSelectedMembers} key={member.id} user={{ name: member.name, profileBackgroundColour: member.profileBackgroundColour as IColour, id: member.id, crewID: ['0'], taskIDs: ['0'] }} />
                            }
                        })
                }
            </ScrollView>
        </View>
    )
}

export default SelectMembers