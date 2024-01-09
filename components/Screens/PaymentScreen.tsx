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
import Summary from './Payment/Summary'
const PaymentScreen = () => {
    //this crew ID should be passed into screen as props, as if it were a URL.
    const thisCrewID = "C1";
    type ISelection = "Everyone" | "Select members" | "Only me"
    const [selection, setSelection] = useState("Everyone" as ISelection);
    const [selectedMembersChippingIn, setSelectedMembersChippingIn] = useState([userIDLoggedIn] as string[]);
    const [usersInThisCrew, setUsersInThisCrew] = useState({ usersInThisCrew: [] as IUser[] });
    //fetch price pppm
    function handleSetSelection(newSelection: ISelection) {
        switch (newSelection) {
            case "Everyone":
                setSelectedMembersChippingIn(usersInThisCrew.usersInThisCrew.map(user => user.id))
                break;
            case "Only me":
                setSelectedMembersChippingIn([userIDLoggedIn])
                break;
            case "Select members":
                setSelectedMembersChippingIn([userIDLoggedIn])
                break;
        }
        if (newSelection !== selection && newSelection !== "Select members") performHaptic("selection");
        setSelection(newSelection)
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
        <Screen crossTopLeft={true} title="Payment" subtitle="Who's contributing towards Pro?" largerSubtitle={true}>
            <View className={mode == "development" ? "bg-green-500" : ""}>
                <ChippingInSelection selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelection} mainText='Everyone' selected={selection == 'Everyone'} />
                <ChippingInSelection selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelection} mainText='Select members' noStrokeOnSelection={true} selected={selection == 'Select members'} />
                <ChippingInSelection selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} last={true} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelection} mainText='Only me' selected={selection == 'Only me'} />
            </View>
            <View style={{ rowGap: spacing.gaps.groupedElement }} className={`flex flex-col ${mode == "development" ? "bg-green-500" : ""}`}>
                <Info backgroundColour='#4E9580' description="You're 1 step away from tripling your crew's performance. 🎯" />
            </View>
            <View className={`${mode == "development" ? "bg-green-500" : ""} flex px-4 flex-row justify-between`}>
                <View className={`flex flex-col `}>
                    <Text className='mb-2 font-afa text-base'>Crew total</Text>
                    {(selection == "Select members" && selectedMembersChippingIn.length > 1) || selection == "Everyone" ?
                        <Text className='mb-2 font-afa text-base'>Splitting with {selectedMembersChippingIn.filter(member => member != userIDLoggedIn)?.length} other(s)</Text> : <></>
                    }
                    <Text className='font-afaB text-base'>To pay</Text>
                </View>
                <View className='flex flex-col items-end'>
                    <Text className='mb-2 font-afa text-end text-base'>£{(pricePerCrewMember * usersInThisCrew.usersInThisCrew.length).toFixed(2)}/mo</Text>
                    {(selection == "Select members" && selectedMembersChippingIn.length > 1) || selection == "Everyone" ?
                        <Text className='mb-2 font-afa text-end text-base'>£{((pricePerCrewMember * usersInThisCrew.usersInThisCrew.length) / selectedMembersChippingIn.length).toFixed(2)}/mo</Text> : <></>
                    }
                    <Text className='font-afaB text-end text-base'>£{((pricePerCrewMember * usersInThisCrew.usersInThisCrew.length) / selectedMembersChippingIn.length).toFixed(2)}/mo</Text>
                </View>
            </View>
            <View style={{ rowGap: spacing.gaps.separateElement }} className={`${mode == "development" ? "bg-green-500" : ""} flex flex-col`}>
                {(selection == "Select members" && selectedMembersChippingIn.length > 1) || selection == "Everyone" ?
                    <Info backgroundColour={colours.offWhite} description="Your crew will be elevated once you and all selected members subscribe." /> : <></>
                }
                <Button style={{ height: 60 }} backgroundColour='#4E9580' text="Continue" textColor='white' type='light' onPress={() => { }} />
            </View>
        </Screen>
    )
}

export default PaymentScreen