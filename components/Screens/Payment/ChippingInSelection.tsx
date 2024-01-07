import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pod from '../../Ui/Pod'
import { colours } from '../../../lib/constants'
import { getUsersInCrew, pricePerCrewMember } from '../../../lib/backend/actions'
import { IUser } from '../../../lib/types'
import { Pressable } from 'react-native';
import SelectMembers from '../../Ui/SelectMembers/SelectMembers'
import MultipleChoiceSelectionIndicator from '../../Ui/MultipleChoiceSelectionIndicator'
import { userIDLoggedIn } from '../../../App';
var equal = require('deep-equal')

const ChippingInSelection = (props: { onSelect: Function, selected: boolean, mainText: string, subText?: string, pricePerCrewMember: number, usersInThisCrew: IUser[], noStrokeOnSelection?: boolean, last?: boolean }) => {
    const { onSelect, selected, mainText, subText, noStrokeOnSelection, usersInThisCrew, last } = props;
    const [selectedMembers, setSelectedMembers] = useState([userIDLoggedIn] as string[])
    useEffect(() => {
        console.log("selectedMembers: ", selectedMembers)
    }, [selectedMembers])
    return (
        <Pressable onPress={() => { onSelect(mainText) }} className={`${last ? "" : "mb-2"}`}>
            <Pod customPadding={{ paddingX: 20, paddingY: 16 }} backgroundColour="white" strokeWidth={selected ? 4 : 2} strokeColour={selected ? !noStrokeOnSelection ? colours.pureBlack : colours.deselected : colours.deselected} >
                <View className='px-5 flex flex-row gap-x-4 items-center'>
                    <MultipleChoiceSelectionIndicator selected={selected} />
                    <View className='flex flex-1 flex-col justify-between'>
                        <Text className='font-afaB text-lg'>{mainText}</Text>
                        {mainText == "Select members" && selected ? <SelectMembers alreadySelectedMembers={selectedMembers} members={usersInThisCrew} setSelectedMembers={setSelectedMembers} /> : <></>}
                        {
                            equal(props.usersInThisCrew, [] as IUser[]) ? <View className='bg-gray-200 animate-pulse w-36 h-8 rounded-lg'></View> :

                                (mainText == "Select members" && selected) || mainText == "Everyone" || mainText == "Only me" ?

                                    <Text className='font-afa text-base'>
                                        {mainText == "Everyone" ? `£${pricePerCrewMember}/mo for you` : mainText == "Only me" ? `£${pricePerCrewMember * usersInThisCrew.length}/mo for you` : mainText == "Select members" ? `£${(pricePerCrewMember * usersInThisCrew.length) / selectedMembers.length}/mo for you` : `Couldn't load price.`}
                                    </Text>

                                    : <></>}
                    </View>
                </View>
            </Pod>
        </Pressable>
    )
}

export default ChippingInSelection