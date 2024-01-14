import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfilePic from '../../User/ProfilePicFactory'
import { IColour, IUser } from '../../../lib/types'
import { colours } from '../../../lib/constants'
import performHaptic from '../../../lib/performHaptic'
import { userIDLoggedIn } from '../../../lib/globals'
type Props = {
    setSelectedMembers?: React.Dispatch<React.SetStateAction<string[]>>,
    user: IUser,
    loading?: boolean
    alreadySelectedMembers?: string[]
}
const Member = (props: Props) => {
    const { user } = props;
    const { setSelectedMembers, alreadySelectedMembers } = props;
    const [selected, setSelected] = useState(false)
    let isThemselves = false;
    if (user.id == userIDLoggedIn) {
        isThemselves = true;
    }

    function toggleMemberPress(): void {
        if (!props.loading) {
            if (!setSelectedMembers) throw new Error('setSelectedMembers is undefined');
            if (selected) {
                if (!isThemselves) {
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
    }
    useEffect(() => {
        if (isThemselves) {
            console.log(props.user.name + " is set to selected as they are apparently the logged in user")
            setSelected(true)
        } else {
            if (alreadySelectedMembers) {
                alreadySelectedMembers.forEach((userID) => {
                    if (userID === user.id) {
                        console.log(props.user.name + " is set to selected as they are apparently already selected")
                        setSelected(true)
                    }
                })
            }
        }
        console.log("Member ", props.user.name, "selected: ", selected, "isThemselves: ", isThemselves)
    }, [])
    return (
        <Pressable style={{ backgroundColor: colours.dark.background }} className='flex flex-col items-center ' onPress={setSelectedMembers ? toggleMemberPress : null}>
            <View style={{ borderColor: selected ? 'white' : colours.dark.primary, borderWidth: selected ? 4 : 2 }} className={`mr-2 rounded-lg px-3 py-2 w-28 flex flex-col justify-center items-center gap-y-2 `}>
                {props.loading ?
                    <>
                        <View className='bg-gray-200  animate-pulse w-8 h-8 rounded-full'></View>
                        <View className='bg-gray-200 animate-pulse w-12 h-8 rounded-lg'></View>
                    </> :
                    <>
                        <ProfilePic users={[user]} />
                        {isThemselves ? <Text style={{ color: colours.dark.textPrimary }} className={`text-base ${selected ? 'font-afaB' : 'font-afa'}`}>Me</Text>
                            : <Text style={{ color: colours.dark.textPrimary }} numberOfLines={1} ellipsizeMode='tail' className={`text-base ${selected ? 'font-afaB' : 'font-afa'}`}>{user.name}</Text>}
                    </>
                }
            </View>
        </Pressable>
    )
}

export default Member