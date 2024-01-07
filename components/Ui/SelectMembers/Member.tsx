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
    const user = [props.user];
    const { setSelectedMembers } = props;
    const [selected, setSelected] = useState(false);
    const [isThemSelves, setIsThemSelves] = useState(false);
    function toggleMemberPress(): void {
        if (!props.loading) {
            if (!setSelectedMembers) throw new Error('setSelectedMembers is undefined');
            if (selected) {
                if (!isThemSelves) {
                    setSelectedMembers((prevState) => (prevState.filter((userID) => userID !== user[0].id)
                    ))
                    performHaptic("selection");
                    setSelected(false);
                }
                else {
                    performHaptic("warning")
                }
            }
            else {
                setSelectedMembers((prevState) => ([...prevState, user[0].id]))
                performHaptic("selection");
                setSelected(true);
            }
        }
    }
    useEffect(() => {
        if (user[0].id == userIDLoggedIn) {
            setSelected(true);
            setIsThemSelves(true);
        }
        if (props.alreadySelectedMembers) {
            if (props.alreadySelectedMembers.includes(user[0].id)) {
                setSelected(true);
            }
        }
    })
    return (
        <Pressable className='flex flex-col items-center bg-white' onPress={toggleMemberPress}>
            <View className={`mr-2 rounded-lg px-3 py-2 w-24 flex flex-col justify-center items-center gap-y-2 ${selected ? 'border-4 border-black' : `border-2 border-${colours.offWhite}`}`}>
                {props.loading ?
                    <>
                        <View className='bg-gray-200  animate-pulse w-8 h-8 rounded-full'></View>
                        <View className='bg-gray-200 animate-pulse w-12 h-8 rounded-lg'></View>
                    </> :
                    <>
                        <ProfilePic users={user} />
                        {user[0].id == userIDLoggedIn ? <Text className={`text-base ${selected ? 'font-afaB' : 'font-afa'} text-black`}>Me</Text>
                            : <Text numberOfLines={1} ellipsizeMode='tail' className={`text-base ${selected ? 'font-afaB' : 'font-afa'}`}>{user[0].name}</Text>}
                    </>
                }
            </View>
        </Pressable>
    )
}

export default Member