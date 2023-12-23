import { View, Text } from 'react-native'
import React from 'react'

const ProPerk = (props: { perkText: string }) => {
    return (
        <View className='flex flex-row gap-x-2 mb-[20px]'>
            <Text className='font-afa text-white'>✓</Text>
            <Text className='font-afa text-white flex-1'>{props.perkText}</Text>
        </View>
    )
}

export default ProPerk