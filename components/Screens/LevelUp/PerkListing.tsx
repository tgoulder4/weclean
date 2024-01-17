import { View, Text } from 'react-native'
import React from 'react'

const PerkListing = (props: { text: string, tickedForFree: boolean, tickedForPro: boolean, doesntHaveBottomDivide: boolean }) => {
    return (
        <View className=' grid grid-cols-levelUpPerk'>
            <Text className='text-white font-afa text-base'>{props.text}</Text>
            {
                props.tickedForFree ? <Text className='text-white font-afa text-base'>✓</Text> : <Text style={{ opacity: 0.5 }} className='text-white font-afa text-base'>✖</Text>
            }
            {
                props.tickedForPro ? <Text className='text-white font-afa text-base'>✓</Text> : <Text style={{ opacity: 0.5 }} className='text-white font-afa text-base'>✖</Text>
            }
            {
                props.doesntHaveBottomDivide ? <></> : <View style={{ backgroundColor: '#1D1D1D' }} className='w-full h-1'></View>
            }
        </View>
    )
}

export default PerkListing