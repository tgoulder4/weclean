import { View, Text } from 'react-native'
import React from 'react'
import { IColour } from '../../App';
type ProfilePicProps = {
    users: User[];
}
type User = {
    name: string;
    profileBackgroundColour: IColour;

}
const ProfilePic = (props: ProfilePicProps): React.ReactNode => {
    // the position of each profile pic depends on the length up to 3
    return (
        <>
            <View className={`relative border-2 border-black bg-${colour} w-12 h-12 rounded-full flex justify-center items-center`}>
                <Text className=' font-afaB text-sm text-white'>{name[0]}</Text>
            </View>
            {/* ??? */}
            {props.users.length}
            <View className='absolute left-8'>
                <Text className='font-afaB text-sm text-white'>☝</Text>
            </View>
        </>
    )
}

export default ProfilePic