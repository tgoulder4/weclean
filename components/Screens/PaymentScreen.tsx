import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Screen } from '../ScreenFactory'
import { colours, mode, spacing } from '../../lib/constants'
import { getUsersInCrew, pricePerCrewMember } from '../../lib/backend/actions'
import { IUser } from '../../lib/types'
import ChippingInSelection from './Payment/ChippingInSelection'
import performHaptic from '../../lib/performHaptic'
import Info from '../Ui/Info'
import Button from '../Ui/button'
import { userIDLoggedIn } from '../../lib/globals'
const PaymentScreen = () => {
    //this crew ID should be passed into screen as props, as if it were a URL.
    const thisCrewID = "C1";

    const [selection, setSelection] = useState("Everyone");
    const [selectedMembersChippingIn, setSelectedMembersChippingIn] = useState([userIDLoggedIn] as string[]);
    const [usersInThisCrew, setUsersInThisCrew] = useState({ usersInThisCrew: [] as IUser[] });
    //fetch price pppm
    function handleSetSelectedPeopleChippingIn(newSelectedPeopleChippingIn: string) {
        if (newSelectedPeopleChippingIn !== selection && newSelectedPeopleChippingIn !== "Select members") performHaptic("selection");
        setSelection(newSelectedPeopleChippingIn)
    }

    useEffect(() => {
        async function getUserCrewInfo() {
            await getUsersInCrew(thisCrewID, userIDLoggedIn).then((users) => {
                setUsersInThisCrew({ usersInThisCrew: users })
            });
        }
        getUserCrewInfo()
    }, [])

    return (
        <Screen title="Payment" subtitle="Who's contributing towards Pro?" largerSubtitle={true}>
            <View className={mode == "development" ? "bg-green-500" : ""}>
                <ChippingInSelection selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelectedPeopleChippingIn} mainText='Everyone' selected={selection == 'Everyone'} />
                <ChippingInSelection selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelectedPeopleChippingIn} mainText='Select members' noStrokeOnSelection={true} selected={selection == 'Select members'} />
                <ChippingInSelection selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} last={true} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelectedPeopleChippingIn} mainText='Only me' selected={selection == 'Only me'} />
            </View>
            <View className={mode == "development" ? "bg-green-500" : ""}>
                <Info className='' description="You're 1 step away from tripling your crew's performance. 🎯" backgroundColour={colours.offWhite} />

            </View>
            <View className={`${mode == "development" ? "bg-green-500" : ""} flex px-4 flex-row justify-between`}>
                <View className={`flex flex-col `}>
                    <Text className='mb-2 font-afa text-base'>Price per crew member</Text>
                    <Text className='mb-2 font-afa text-base'>Crew total</Text>
                    {selectedMembersChippingIn?.length > 1 ?
                        <Text className='mb-2 font-afa text-base'>Split across {selectedMembersChippingIn.length} members</Text> : <></>
                    }
                    <Text className='font-afaB text-base'>To pay</Text>
                </View>
                <View className='flex flex-col items-end'>
                    <Text className='mb-2 font-afa text-end text-base'>£{pricePerCrewMember}/mo</Text>
                    <Text className='mb-2 font-afa text-end text-base'>£{pricePerCrewMember * usersInThisCrew.usersInThisCrew.length}/mo</Text>
                    {selectedMembersChippingIn?.length > 1 ?
                        <Text className='mb-2 font-afa text-end text-base'>a</Text> : <></>
                    }
                    <Text className='font-afaB text-end text-base'>£0.00/mo</Text>
                </View>
            </View>
            <View style={{ rowGap: spacing.gaps.smaller }} className={`${mode == "development" ? "bg-green-500" : ""} flex flex-col`}>
                <Button text="Continue" backgroundColour={colours.offBlack} textColor='white' type='light' onPress={() => { }} />
                {selection == "Select members" || selection == "Everyone" ?
                    <Text className='px-4 font-afa text-base' style={{ color: '#696969' }}>Your crew will be elevated once you and all selected members subscribe.</Text> : <></>
                }
            </View>
        </Screen>
    )
}

export default PaymentScreen