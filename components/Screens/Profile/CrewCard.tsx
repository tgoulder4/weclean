import { View, Text, Image } from 'react-native'
import React from 'react'
import { colours, spacing } from '../../../lib/constants'
import { ICrew } from '../../../lib/types'
import { getMonth, getYear, format } from 'date-fns'
import ProfilePic from '../../User/ProfilePicFactory'

const CrewCard = (props: {
    darkMode?: boolean, crewMemberSince: string,
    isPro: boolean, name: string, profilePicture: string, hasChevron?: boolean
}) => {
    const { hasChevron, darkMode, isPro, name, profilePicture } = props;
    console.log("isPro: ", isPro)

    return (
        <View className='h-48 rounded-[20px] flex flex-col items-center justify-center' style={{ rowGap: spacing.gaps.separateElement, backgroundColor: !isPro ? colours.light.primary : colours.dark.primary, padding: spacing.padding.normalX }}>
            <View style={{ borderColor: darkMode ? 'white' : 'black' }} className='w-12 h-12 rounded-full border-4'>
                <Image source={{ uri: profilePicture }} />
            </View>
            {isPro ?
                <View className='flex flex-row items-center' style={{ backgroundColor: darkMode ? colours.dark.primary : colours.light.primary }}>
                    <Text style={{ color: darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-rubik text-md'>Pro</Text>
                </View> : <></>
            }
            <View className='flex flex-col  items-center'>
                <Text style={{ color: darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-afaB text-base'>{name.toUpperCase()}</Text>
                <Text style={{ color: darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-afa text-base'>Member since {format(getMonth(props.crewMemberSince), "MMMM")} {getYear(props.crewMemberSince)}</Text>
            </View>
        </View>
    )
}

export default CrewCard