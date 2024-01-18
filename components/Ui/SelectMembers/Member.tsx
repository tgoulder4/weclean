import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfilePic from '../../User/ProfilePicFactory'
import { IColour, IUser } from '../../../lib/types'
import { colours } from '../../../lib/constants'
import performHaptic from '../../../lib/performHaptic'
import { userIDLoggedIn } from '../../../lib/globals'
import { PulseComponent } from '../../../lib/animations'
type Props = {
    setSelectedMembers?: React.Dispatch<React.SetStateAction<string[]>>,
    user: IUser,
    loading?: boolean
    alreadySelectedMembers?: string[],
    maxMembers?: number,
    setViewingMode?: React.Dispatch<React.SetStateAction<"edit" | "view">>
    darkMode?: boolean
    mustInclude?: string[]
}
const Member = (props: Props) => {
    const { user } = props;
    const { setSelectedMembers, alreadySelectedMembers } = props;
    const [selected, setSelected] = useState(false)
    let unableToUnselect = false;
    if (props.mustInclude?.includes(user.id)) {
        unableToUnselect = true;
    }
    console.log("unableToUnselect: ", unableToUnselect, "user.id: ", user.id, "props.mustInclude: ", props.mustInclude)

    function toggleMemberPress(): void {
        if (!props.loading) {
            if (!setSelectedMembers) throw new Error('setSelectedMembers is undefined');
            if (selected) {
                if (!unableToUnselect) {
                    setSelectedMembers((prevState) => (prevState.filter((userID) => userID !== user.id)
                    ))
                    performHaptic("selection");
                    setSelected(false)
                }
                else {
                    performHaptic("warning")
                }
            }
            else {
                setSelectedMembers((prevState) => ([...prevState, user.id]))
                performHaptic("selection");
                setSelected(true)
            }
        }
        console.log("alreadySelectedMembers: ", alreadySelectedMembers?.length, "maxMembers: ", props.maxMembers)
        if (props.maxMembers == Number(alreadySelectedMembers?.length) + 1) {
            if (props.setViewingMode) props.setViewingMode("view")
        } else {
            if (props.setViewingMode) props.setViewingMode("edit")
        }
    }
    useEffect(() => {
        if (unableToUnselect) {
            // console.log(props.user.name + " is set to selected as they are apparently the logged in user")
            setSelected(true)
        } else {
            if (alreadySelectedMembers) {
                alreadySelectedMembers.forEach((userID) => {
                    if (userID === user.id) {
                        // console.log(props.user.name + " is set to selected as they are apparently already selected")
                        setSelected(true)
                    }
                })
            }
        }
    }, [])
    return (
        <Pressable style={{ backgroundColor: props.darkMode ? colours.dark.background : colours.light.background }} className='flex flex-col items-center ' onPress={setSelectedMembers ? toggleMemberPress : null}>
            <View style={{ borderColor: selected ? props.darkMode ? 'white' : "black" : props.darkMode ? colours.dark.primary : colours.light.primary, borderWidth: selected ? 4 : 2 }} className={`mr-2 rounded-lg px-3 py-2 w-28 flex flex-col justify-center items-center gap-y-2 `}>
                {props.loading ?
                    <PulseComponent>
                        <View className='bg-gray-200  animate-pulse w-8 h-8 rounded-full'></View>
                        <View className='bg-gray-200 animate-pulse w-12 h-8 rounded-lg'></View>
                    </PulseComponent> :
                    <>
                        <ProfilePic users={[user]} />
                        <Text style={{ color: props.darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} numberOfLines={1} ellipsizeMode='tail' className={`text-base ${selected ? 'font-afaB' : 'font-afa'}`}>{user.name}</Text>
                    </>
                }
            </View>
        </Pressable>
    )
}

export default Member