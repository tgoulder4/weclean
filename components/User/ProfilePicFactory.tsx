import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { IUser } from '../../lib/types';
type ProfilePicProps = {
    users: IUser[];
    isRequest?: boolean;
    customBorderWidth?: number;
    style?: { outerPodStyle?: StyleProp<ViewStyle>, profilePicStyle: StyleProp<ViewStyle> };
}
const ProfilePic = (props: ProfilePicProps): React.ReactNode => {
    // the position of each profile pic depends on the length up to 3
    const { users, style, customBorderWidth } = props;
    if (users.length > 3) {
        users.length = 3
    }
    console.log("Custom border width: ", customBorderWidth)
    return (
        <View className='w-12 h-12' style={[style?.outerPodStyle, { right: (users.length - 1) * 5 }]}>
            {users.map((user, index) => (
                <View key={index} style={[style?.profilePicStyle, {
                    borderWidth:
                        4
                    , backgroundColor: user.profileBackgroundColour, zIndex: 3 - index, elevation: 3 - index, position: 'absolute', right: index - (index * 6)
                }]} className={` relative border-black w-12 h-12 rounded-full flex justify-center items-center`}>
                    <Text className=' font-afaB text-sm text-white'>{user.name[0]}</Text>
                </View>
            ))}
            {props.isRequest ?

                <View className='absolute  outline-2 outline-black' style={{ zIndex: 5, elevation: 5, left: 30 }}>
                    <Text className='font-afaB text-sm text-white'>☝</Text>
                </View> : <></>
            }
        </View>
    )
}

export default ProfilePic