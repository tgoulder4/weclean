import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import ProfilePic from '../../User/ProfilePicFactory'
import { IColour, colours } from '../../../lib/constants'
import { IUser } from '../../../lib/backend/actions'
import performHaptic from '../../../lib/performHaptic'
type Props = {
    setSelectedMembers?: React.Dispatch<React.SetStateAction<{
        count: number;
        userIDs: string[]
    }>>,
    user: IUser,
    loading?: boolean
}
const Member = (props: Props) => {
    const user = [props.user];

    const [selected, setSelected] = useState(false);
    function handleMemberPress() {
        if (!props.loading) {
            performHaptic("selection");
            setSelected(!selected);
        }
    }
    return (
        <Pressable className='flex flex-col items-center bg-white' onPress={handleMemberPress}>
            <View className={`mr-2 rounded-lg px-4 py-3  w-32 flex flex-col justify-center items-center gap-y-2 ${selected ? 'border-4 border-black' : `border-2 border-${colours.offWhite}`}`}>
                {props.loading ?
                    <>
                        <View className='bg-gray-200  animate-pulse w-8 h-8 rounded-full'></View>
                        <View className='bg-gray-200 animate-pulse w-12 h-8 rounded-lg'></View>
                    </> :
                    <>
                        <ProfilePic users={user} />
                        <Text numberOfLines={1} ellipsizeMode='tail' className={`text-base ${selected ? 'font-afaB' : 'font-afa'}`}>{user[0].name}</Text>
                    </>
                }
            </View>
        </Pressable>
    )
}

export default Member