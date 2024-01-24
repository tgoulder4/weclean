import { View, Text } from 'react-native'
import React from 'react'
import { colours } from '../../../lib/constants';

const PerkListing = (props: { darkMode?: boolean, text: string, tickedForFree: boolean, tickedForPro: boolean, doesntHaveBottomDivide: boolean }) => {
    const { darkMode } = props;
    return (
        <View className=' grid grid-cols-levelUpPerk'>
            <Text style={{ color: darkMode ? 'white' : 'black' }} className='font-afa text-base'>{props.text}</Text>
            {
                props.tickedForFree ? <Text style={{ color: darkMode ? colours.light.textPrimary : colours.dark.textPrimary }} className='font-afa text-base'>✓</Text> : <Text style={{ opacity: 0.5 }} className='text-white font-afa text-base'>✖</Text>
            }
            {
                props.tickedForPro ? <Text style={{ color: darkMode ? colours.light.textPrimary : colours.dark.textPrimary }} className=' font-afa text-base'>✓</Text> : <Text style={{ opacity: 0.5 }} className='text-white font-afa text-base'>✖</Text>
            }
            {
                props.doesntHaveBottomDivide ? <></> : <View style={{ backgroundColor: darkMode ? colours.dark.primary : colours.light.primary }} className='w-full h-1'></View>
            }
        </View>
    )
}

export default PerkListing