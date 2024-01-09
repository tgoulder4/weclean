import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pod from '../../Ui/Pod'
import { colours, spacing } from '../../../lib/constants'
import { getUsersInCrew, pricePerCrewMember } from '../../../lib/backend/actions'
import { IUser } from '../../../lib/types'
import { Pressable } from 'react-native';
import SelectMembers from '../../Ui/SelectMembers/SelectMembers'
import MultipleChoiceSelectionIndicator from '../../Ui/MultipleChoiceSelectionIndicator'
import { userIDLoggedIn } from '../../../lib/globals'
var equal = require('deep-equal')

const ChippingInSelection = (props: { onSelect: Function, selected: boolean, mainText: string, subText?: string, pricePerCrewMember: number, usersInThisCrew: IUser[], noStrokeOnSelection?: boolean, last?: boolean, selectedMembers: string[], setSelectedMembers: React.Dispatch<React.SetStateAction<string[]>> }) => {
    const { onSelect, selected, mainText, subText, noStrokeOnSelection, usersInThisCrew, last, selectedMembers, setSelectedMembers } = props;

    let total: string | number | null = 0;
    switch (mainText) {
        case "Everyone":
            total = pricePerCrewMember;
            console.log("total for everyone: ", total)
            break;
        case "Only me":
            total = pricePerCrewMember * usersInThisCrew.length;
            console.log("total for only me: ", total)
            break;
        case "Select members":
            total = (pricePerCrewMember * usersInThisCrew.length) / selectedMembers.length;
            console.log("total for select members: ", total)
            break;
    }
    if (total < pricePerCrewMember) {
        total = pricePerCrewMember
    }
    else {
        total = total.toFixed(2);
    };
    useEffect(() => {
        console.log("selectedMembers: ", selectedMembers)
        if (mainText == "Everyone") setSelectedMembers(usersInThisCrew.map(user => user.id))

    }, [])
    return (
        <Pressable onPress={() => { onSelect(mainText) }} className={`${last ? "" : "mb-2"}`}>
            <Pod customPadding={{ paddingX: 20, paddingY: 20 }} backgroundColour="white" strokeWidth={2} strokeColour={selected ? !noStrokeOnSelection ? colours.pureBlack : colours.deselected : colours.deselected} >
                <View className='px-5 flex flex-row gap-x-4 items-center'>
                    <MultipleChoiceSelectionIndicator selected={selected} />
                    <View style={{ rowGap: spacing.gaps.smaller, }} className='flex flex-1 flex-col justify-between'>
                        <Text className='font-afaB text-base text-[13px]'>{mainText}</Text>
                        {mainText == "Select members" && selected ? <SelectMembers action="Splitting with" alreadySelectedMembers={selectedMembers} _members={usersInThisCrew} setSelectedMembers={setSelectedMembers} /> : <></>}
                        {
                            equal(props.usersInThisCrew, [] as IUser[]) ? <View className='bg-gray-200 animate-pulse w-36 h-8 rounded-lg'></View> :

                                (mainText == "Select members" && selected) || mainText == "Everyone" || mainText == "Only me" && selected ?

                                    <Text className='font-afa text-base'>
                                        {`£${total}/mo ${mainText != "Only me" ? "for you" : ""}`}
                                        {total == null ?
                                            <View className='p-2 bg-red-500 rounded-lg h-min'>
                                                <Text className='font-afaB text-white text-base'>Couldn't load price. Please try again later.</Text>
                                            </View>
                                            : <></>}
                                    </Text>
                                    : <></>}
                    </View>
                </View>
            </Pod>
        </Pressable>
    )
}

export default ChippingInSelection