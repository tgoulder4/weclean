import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Pod from '../../Ui/Pod'
import { colours } from '../../../lib/constants'
import { getUsersInCrew, pricePerCrewMember } from '../../../lib/backend/actions'
import { Pressable } from 'react-native';
import SelectMembers from '../../Ui/SelectMembers'

const ChippingInSelection = (props: { loading: boolean, onSelect: Function, selected: boolean, mainText: string, subText?: string }) => {
    const { onSelect, selected, mainText, subText, loading } = props;
    return (
        <Pressable onPress={() => { onSelect(mainText) }}>
            <Pod backgroundColour="white" strokeColour={selected ? colours.pureBlack : colours.deselected} >
                <View className='flex flex-row gap-x-4 items-center'>
                    <View className='flex flex-col gap-y-2 justify-between'>
                        <Text className=' font-afaB text-base'>{mainText}</Text>
                        {mainText == "Select members" ? <SelectMembers /> : <></>}
                        {
                            loading ? <View className='bg-gray-200 animate-pulse w-36 h-8 rounded-lg'></View> :
                                subText || (mainText == "Select members" && selected) ?
                                    <Text className='font-afa'>£2.49/mo for you</Text> : <></>
                        }
                    </View>
                </View>
            </Pod>
        </Pressable>
    )
}

export default ChippingInSelection