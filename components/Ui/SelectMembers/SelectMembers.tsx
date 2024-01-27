import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Member from './Member'
import { getProfileBackgroundColour, getUsersInCrew, } from '../../../app/backend/actions'
import { IColour, IUser } from '../../../lib/types'
import { colours, spacing } from '../../../lib/constants'
import { PulseComponent } from '../animations'
import { UserAndCrewContext } from '../../Context/Context'
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
    >>, hideSummary?: boolean, action: string, _members?: Array<IUser>, alreadySelectedMembers?: string[], _viewingMode: "edit" | "view", maxMemers?: number, darkMode?: boolean, mustInclude?: string[], dontShow?: string[]
}) => {
    const { darkMode, action, setSelectedMembers, _members, alreadySelectedMembers, _viewingMode, hideSummary } = props;
    const [OriginalMembers, setOriginalMembers] = useState<Array<IUser>>(_members ? _members : [] as IUser[]);
    const [members, setMembers] = useState<Array<IUser>>(OriginalMembers);
    const [viewingMode, setViewingMode] = useState(_viewingMode);


    //this should be passed into the screen as a prop, as if it were a URL.
    const crewAndUserContext = useContext(UserAndCrewContext);
    const userIDLoggedIn = crewAndUserContext.user.id;
    const currentCrewID = crewAndUserContext.currentCrewID;
    console.log("viewingMode: ", viewingMode);
    console.log("_members: ", _members);
    const names: string[] = alreadySelectedMembers?.map(userID => {
        if (userID == userIDLoggedIn) return ""
        const _name = OriginalMembers.find(_member => _member.id == userID)?.name;
        if (_name) return _name;
        else return ""
    }).filter(name => name != "") as string[];
    async function main() {
        const mem = await getUsersInCrew(currentCrewID, userIDLoggedIn);
        setOriginalMembers(mem)
        setMembers(mem);
    }
    //if the members aren't passed, get all users in crew from backend
    useEffect(() => {
        if (!props._members) main();
    }, []
    )
    return (
        <View style={{ rowGap: spacing.gaps.groupedElement }} className='flex flex-col flex-1'>

            {
                hideSummary ? <></> :
                    names.length > 0 ?
                        <Text style={{ color: props.darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-afa text-base'>{action} {names?.join(", ")}</Text> : <Text style={{ color: colours.dark.textSecondary }} className='font-afaB text-base'>No one else selected</Text>
            }

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
                    placeholder='Search' className='py-2 px-3 rounded-lg mb-2 font-afaB text-base' style={{ backgroundColor: darkMode ? colours.dark.input.background : colours.light.input.background, color: props.darkMode ? colours.dark.textPrimary : colours.light.textPrimary }}></TextInput> : <></>
            }
            <ScrollView style={{ backgroundColor: darkMode ? colours.dark.background : colours.light.background }} horizontal={true} className='flex flex-row py-2 mt-[-1] w-full'>
                {
                    viewingMode == "edit" ?
                        //if there are no passed to this component yet, show loading members
                        OriginalMembers.length == 0 ?
                            <PulseComponent>
                                <Member loading={true} user={{ name: "a", crews: [{}], profileBackgroundColour: "b", id: '0', taskIDs: ['0'] }} />
                                <Member loading={true} user={{ name: "a", crews: [{}], profileBackgroundColour: "b", id: '0', taskIDs: ['0'] }} />
                            </PulseComponent>
                            :
                            //if the rendered members length is 0, no search results were found
                            members.length == 0 ? <Text className='font-afa flex-1 w-48 text-base text-gray-400 h-24'>No members match this search criteria.</Text>
                                :
                                //else, render the members
                                members.map((member, index) =>
                                    <Member maxMembers={props.maxMemers} mustInclude={props.mustInclude} darkMode={props.darkMode} setViewingMode={setViewingMode} alreadySelectedMembers={alreadySelectedMembers} setSelectedMembers={setSelectedMembers} key={member.id} user={{ name: member.name, crews: [{}], profileBackgroundColour: member.profileBackgroundColour, id: member.id, taskIDs: ['0'] }} />) :
                        //else, render the selected members only
                        alreadySelectedMembers?.map((userID, index) => {

                            const member = OriginalMembers.find(_member => _member.id == userID);
                            if (member) {
                                return <Member maxMembers={props.maxMemers} mustInclude={props.mustInclude} darkMode={props.darkMode} setViewingMode={setViewingMode} alreadySelectedMembers={alreadySelectedMembers} setSelectedMembers={setSelectedMembers} key={member.id} user={{ name: member.name, crews: [{}], profileBackgroundColour: member.profileBackgroundColour, id: member.id, taskIDs: ['0'] }} />
                            }
                        })
                }
            </ScrollView>
        </View>
    )
}

export default SelectMembers