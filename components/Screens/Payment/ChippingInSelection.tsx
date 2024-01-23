import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pod from '../../Ui/Pod'
import { colours, spacing } from '../../../lib/constants'
import { getUsersInCrew } from '../../../lib/backend/actions'
import { IUser } from '../../../lib/types'
import { Pressable } from 'react-native';
import SelectMembers from '../../Ui/SelectMembers/SelectMembers'
import MultipleChoiceSelectionIndicator from '../../Ui/MultipleChoiceSelectionIndicator'
import { pricePerCrewMember } from '../../../lib/backend/mockData'
import { PulseComponent } from '../../../lib/animations'
var equal = require('deep-equal')

const ChippingInSelection = (props: { onSelect: Function, selected: boolean, mainText: string, subText?: string, pricePerCrewMember: number, usersInThisCrew: IUser[], noStrokeOnSelection?: boolean, last?: boolean, selectedMembers: string[], setSelectedMembers: React.Dispatch<React.SetStateAction<string[]>> }) => {
    const { onSelect, selected, mainText, subText, noStrokeOnSelection, usersInThisCrew, last, selectedMembers, setSelectedMembers } = props;
    const userIDLoggedIn = "GHI789";
    let total: string | number | null = 0;
    switch (mainText) {
        case "Everyone":
            total = pricePerCrewMember;
            break;
        case "Only me":
            total = pricePerCrewMember * usersInThisCrew.length;
            break;
        case "Select members":
            total = (pricePerCrewMember * usersInThisCrew.length) / selectedMembers.length;
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
        <Pressable style={{ backgroundColor: colours.dark.background }} onPress={() => { onSelect(mainText) }} className={`rounded-[20px] p-0 ${last ? "" : "mb-2"}`}>
            <Pod customPadding={{
                paddingX: 20,
                paddingY: 20,
            }} customBorder={
                {
                    width: selected ?
                        !noStrokeOnSelection ? 4 : 1 : 1,
                    colour: selected ?
                        !noStrokeOnSelection ?
                            colours.dark.secondary
                            : colours.dark.textSecondary
                        : colours.dark.textSecondary
                }
            }>
                <View className='flex flex-row items-center'>
                    <MultipleChoiceSelectionIndicator style={{ marginRight: 20 }} selected={selected} />
                    <View
                        // style={{ rowGap: spacing.gaps.groupedElement, }} 
                        className='flex flex-1 flex-col justify-between'>
                        <Text style={{ color: colours.dark.textPrimary }} className='font-afaB text-base text-[13px]'>{mainText}</Text>
                        {mainText == "Select members" && selected ? <SelectMembers darkMode={true} mustInclude={["GHI789"]} _viewingMode='edit' action="Splitting with" alreadySelectedMembers={selectedMembers} _members={usersInThisCrew} setSelectedMembers={setSelectedMembers} /> : <></>}
                        {
                            equal(props.usersInThisCrew, [] as IUser[]) ? <PulseComponent><View style={{ backgroundColor: colours.dark.primary }} className=' w-36 h-7 rounded-lg'></View></PulseComponent> :

                                (mainText == "Select members" && selected) || mainText == "Everyone" || mainText == "Only me" && selected ?

                                    <Text style={{ marginTop: spacing.gaps.groupedElement, color: colours.dark.textSecondary }} className='font-afa text-base'>
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