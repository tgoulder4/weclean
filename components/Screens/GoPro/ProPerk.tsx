import { View, Text } from 'react-native'
import React from 'react'

const ProPerk = (props: { perkIcon: string, perkTitle: string, perkText: string }) => {
    return (
        <View className=' flex-1 flex flex-row gap-x-2 mb-[20px]'>
            <Text className='font-afa text-white'>{props.perkIcon}</Text>
            <View className='flex-1 flex flex-col gap-y-2'>
                <Text className='font-afaB text-white'>{props.perkTitle}</Text>
                <Text className='font-afa text-white flex-1'>{props.perkText}</Text>

            </View>
        </View>
    )
}

export default ProPerk