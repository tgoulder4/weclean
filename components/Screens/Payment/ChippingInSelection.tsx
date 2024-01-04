import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Pod from '../../Ui/Pod'
import { colours } from '../../../lib/constants'
import { getUsersInCrew, pricePerCrewMember } from '../../../lib/backend/actions'
import { Pressable } from 'react-native';
import SelectMembers from '../../Ui/SelectMembers'
import { UserCrewInfo } from '../PaymentScreen'
var equal = require('deep-equal')

const ChippingInSelection = (props: { onSelect: Function, selected: boolean, mainText: string, subText?: string, userCrewInfo: UserCrewInfo }) => {
    const { onSelect, selected, mainText, subText, userCrewInfo } = props;
    return (
        <Pressable onPress={() => { onSelect(mainText) }}>
            <Pod backgroundColour="white" strokeColour={selected ? colours.pureBlack : colours.deselected} >
                <View className='flex flex-row gap-x-4 items-center'>
                    <View className='flex flex-col gap-y-2 justify-between'>
                        <Text className=' font-afaB text-base'>{mainText}</Text>
                        {mainText == "Select members" ? <SelectMembers /> : <></>}
                        {
                            equal(userCrewInfo, { totalCost: -1, noOfMembers: -1 }) ? <View className='bg-gray-200 animate-pulse w-36 h-8 rounded-lg'></View> :
                                <Text className='font-afa'>
                                    {mainText == "Everyone" ? `£${userCrewInfo.totalCost / userCrewInfo.noOfMembers}/mo for you` : mainText == "Only me" ? `£${userCrewInfo.totalCost}/mo for you` : mainText == "Select members" ? `/mo for you` : `Error`}
                                </Text>
                        }
                    </View>
                </View>
            </Pod>
        </Pressable>
    )
}

export default ChippingInSelection