import { View, Text, Image } from 'react-native'
import React from 'react'
import { colours, spacing } from '../../../lib/constants'
import { ICrew } from '../../../lib/types'

const CrewCard = (props: { darkMode?: boolean, crew: ICrew, crewMemberSince: string, hasChevron?: boolean }) => {
    const { hasChevron, darkMode } = props;
    const { isPro, name, profilePicture } = props.crew;
    return (
        <View className='h-48 rounded-[20px] flex flex-col items-center justify-center' style={{ backgroundColor: !isPro ? colours.light.primary : colours.dark.primary, padding: spacing.padding.normalX }}>
            <View style={{ borderColor: darkMode ? 'white' : 'black' }} className='w-12 h-12 rounded-full border-2'>
                <Image source={{ uri: profilePicture }} />
            </View>
            {isPro ?
                <View className='flex flex-row items-center' style={{ backgroundColor: darkMode ? colours.dark.primary : colours.light.primary }}>
                    <Text style={{ color: darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-rubik text-md'>Pro</Text>
                </View> : <></>
            }
            <Text style={{ color: darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-afaB text-base'>{name.toUpperCase()}</Text>
            <Text style={{ color: darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-afa text-base'>Member since {props.crewMemberSince}</Text>
        </View>
    )
}

export default CrewCard