import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Screen } from '../ScreenFactory'
import Pod from '../Ui/Pod'
import { colours } from '../../lib/constants'
import { getUsersInCrew, pricePerCrewMember } from '../../lib/backend/actions'
import ChippingInSelection from './Payment/ChippingInSelection'
import performHaptic from '../../lib/performHaptic'
import Info from '../Ui/Info'
import Button from '../Ui/button'
import { StatusBar } from 'expo-status-bar'
export type UserCrewInfo = {
    noOfMembers: number,
    totalCost: number

}
const PaymentScreen = () => {
    const [selectedPeopleChippingIn, setSelectedPeopleChippingIn] = useState("Everyone");
    const [userCrewInfo, setUserCrewInfo] = useState({ totalCost: -1, noOfMembers: -1 });
    //fetch price pppm
    function handleSetSelectedPeopleChippingIn(newSelectedPeopleChippingIn: string) {
        performHaptic("selection")
        setSelectedPeopleChippingIn(newSelectedPeopleChippingIn)
    }
    useEffect(() => {
        async function getUserCrewInfo() {
            await getUsersInCrew("abc").then((users) => {
                const cost = users.length * pricePerCrewMember;
                const userLength = users.length;
                setUserCrewInfo({ noOfMembers: userLength, totalCost: cost })
            });
        }
        getUserCrewInfo()
    }, [])

    return (
        <View className='flex flex-col h-full'>
            <ScrollView className=' bg-white border-2 gap-y-4'>
                <View className='px-2 pt-28 gap-y-2'>

                    <Text className='font-rubik text-2xl text-black'>Who's chipping in?</Text>
                    <View className='flex flex-col h-full'>
                        <View className='flex flex-col gap-y-2'>
                            <ChippingInSelection userCrewInfo={userCrewInfo} onSelect={handleSetSelectedPeopleChippingIn} mainText='Everyone' selected={selectedPeopleChippingIn == 'Everyone'} />
                            <ChippingInSelection userCrewInfo={userCrewInfo} onSelect={handleSetSelectedPeopleChippingIn} mainText='Select members' selected={selectedPeopleChippingIn == 'Select members'} />
                            <ChippingInSelection userCrewInfo={userCrewInfo} onSelect={handleSetSelectedPeopleChippingIn} mainText='Only me' selected={selectedPeopleChippingIn == 'Only me'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='bg-white flex flex-col-reverse gap-y-2 py-6 pb-12 px-5 max-h-72'>
                <Button text="Continue" backgroundColour={colours.offBlack} textColor='white' type='light' onPress={() => { }} />
                <Info className='' description="You're 1 step away from tripling your crew's performance. 🎯" backgroundColour={colours.offWhite} />
            </View>
        </View>

    )
}

export default PaymentScreen