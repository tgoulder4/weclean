import { View, Text } from 'react-native'
import React from 'react'
import { IColour } from '../../lib/constants';
import { IUser } from '../../lib/backend/actions';
type ProfilePicProps = {
    users: IUser[];
    isRequest?: boolean;
}
const ProfilePic = (props: ProfilePicProps): React.ReactNode => {
    // the position of each profile pic depends on the length up to 3
    const { users } = props;
    if (users.length > 3) {
        users.length = 3
    }
    return (
        <View className='w-12 h-12' style={{ right: (users.length - 1) * 5 }}>
            {users.map((user, index) => (
                <View key={index} style={{ zIndex: 3 - index, elevation: 3 - index, position: 'absolute', right: index - (index * 6) }} className={`bg-indigo-500 relative  border-2 border-black bg-${user.profileBackgroundColour} w-12 h-12 rounded-full flex justify-center items-center`}>
                    <Text className=' font-afaB text-sm text-white'>{user.name[0]}</Text>
                </View>
            ))}
            {
                props.isRequest ?

                    <View className='absolute  outline-2 outline-black' style={{ zIndex: 5, elevation: 5, left: 30 }}>
                        <Text className='font-afaB text-sm text-white'>☝</Text>
                    </View> : <></>
            }
        </View>
    )
}

export default ProfilePic