import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Screen } from '../ScreenFactory'
import { colours, mode, spacing } from '../../lib/constants'
import { getUsersInCrew } from '../../lib/backend/actions'
import { IUser } from '../../lib/types'
import ChippingInSelection from './Payment/ChippingInSelection'
import performHaptic from '../../lib/performHaptic'
import Info from '../Ui/Info'
import Button from '../Ui/button'
import { pricePerCrewMember } from '../../lib/backend/mockData'
const PaymentScreen = (props: { paymentScreenGoBack: () => void, darkMode?: boolean }) => {
    //this crew ID should be passed into screen as props, as if it were a URL.
    const thisCrewID = "C1";
    const userIDLoggedIn = "GHI789";
    type ISelection = "Everyone" | "Select members" | "Only me"
    const [selection, setSelection] = useState("Everyone" as ISelection);
    const [selectedMembersChippingIn, setSelectedMembersChippingIn] = useState([userIDLoggedIn] as string[]);
    const [usersInThisCrew, setUsersInThisCrew] = useState({ usersInThisCrew: [] as IUser[] });
    const { darkMode } = props;
    //fetch price pppm
    function handleSetSelection(newSelection: ISelection) {
        if (newSelection !== selection) {
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
            performHaptic("medium");
            setSelection(newSelection)
        }
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
        <Screen customGoBackSequence={
            props.paymentScreenGoBack
        } darkMode={darkMode ? darkMode : false} titleStyle={{ fontSize: 19 }} crossTopLeft={true} title="Who's chipping in?" >
            <View className={mode == "development" ? "bg-green-500" : ""}>
                <ChippingInSelection darkMode={darkMode} selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelection} mainText='Everyone' selected={selection == 'Everyone'} />
                <ChippingInSelection darkMode={darkMode} selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelection} mainText='Select members' noStrokeOnSelection={true} selected={selection == 'Select members'} />
                <ChippingInSelection darkMode={darkMode} selectedMembers={selectedMembersChippingIn} setSelectedMembers={setSelectedMembersChippingIn} last={true} pricePerCrewMember={pricePerCrewMember} usersInThisCrew={usersInThisCrew.usersInThisCrew} onSelect={handleSetSelection} mainText='Only me' selected={selection == 'Only me'} />
            </View>
            {(selection == "Select members" && selectedMembersChippingIn.length > 1) || selection == "Everyone" ?
                <Info backgroundColour='#7A95B4' description="✌ Your crew will be elevated once you and all selected members subscribe." /> : <></>
            }
            <View style={{ rowGap: spacing.gaps.separateElement }} className={`${mode == "development" ? "bg-green-500" : ""} flex flex-col`}>
                <View className={`${mode == "development" ? "bg-green-500" : ""} flex px-4 flex-row justify-between`}>
                    <View className={`flex flex-col `}>
                        <Text style={{ color: darkMode ? colours.dark.textSecondary : colours.light.textSecondary }} className='mb-2 font-afa text-base'>Price per crew member</Text>
                        <Text style={{ color: darkMode ? colours.dark.textSecondary : colours.light.textSecondary }} className='mb-2 font-afa text-base'>Crew total</Text>
                        {(selection == "Select members" && selectedMembersChippingIn.length > 1) || selection == "Everyone" ?
                            <Text style={{ color: darkMode ? colours.dark.textSecondary : colours.light.textSecondary }} className='mb-2 font-afa text-base'>Splitting with {selectedMembersChippingIn.filter(member => member != userIDLoggedIn)?.length} other(s)</Text> : <></>
                        }
                        <Text style={{ color: darkMode ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-afaB text-base'>To pay</Text>
                    </View>
                    <View className='flex flex-col items-end'>
                        <Text style={{ color: darkMode ? colours.dark.textSecondary : colours.light.textSecondary }} className='mb-2 font-afa text-end text-base'>£{(pricePerCrewMember).toFixed(2)}/mo</Text>
                        <Text style={{ color: darkMode ? colours.dark.textSecondary : colours.light.textSecondary }} className='mb-2 font-afa text-end text-base'>£{(pricePerCrewMember * usersInThisCrew.usersInThisCrew.length).toFixed(2)}/mo</Text>
                        {(selection == "Select members" && selectedMembersChippingIn.length > 1) || selection == "Everyone" ?
                            <Text style={{ color: darkMode ? colours.dark.textSecondary : colours.light.textSecondary }} className='mb-2 font-afa text-end text-base'>£{((pricePerCrewMember * usersInThisCrew.usersInThisCrew.length) / selectedMembersChippingIn.length).toFixed(2)}/mo</Text> : <></>
                        }
                        <Text style={{ color: colours.dark.textPrimary }} className='font-afaB text-end text-base'>£{((pricePerCrewMember * usersInThisCrew.usersInThisCrew.length) / selectedMembersChippingIn.length).toFixed(2)}/mo</Text>
                    </View>
                </View>
                <Button style={{ height: 60 }} backgroundColour='#4DB583' text="CONTINUE" textColor='white' type='light' customOnPress={() => { }} />
            </View>
        </Screen>
    )
}

export default PaymentScreen