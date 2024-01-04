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

const PaymentScreen = () => {
    const [selectedPeopleChippingIn, setSelectedPeopleChippingIn] = useState("Everyone");
    const [totalCost, setTotalCost] = useState(0);
    //fetch price pppm
    function handleSetSelectedPeopleChippingIn(newSelectedPeopleChippingIn: string) {
        performHaptic("selection")
        setSelectedPeopleChippingIn(newSelectedPeopleChippingIn)
    }

    useEffect(() => {
        async function getPrices() {
            await getUsersInCrew("abc").then((users) => {
                const cost = users.length * pricePerCrewMember;
                setTotalCost(cost);
            });
        }
        getPrices()
    }, [])

    return (
        <View className='flex flex-col h-full'>
            <ScrollView className=' bg-white border-2 gap-y-4'>
                <View className='px-2 pt-28 gap-y-2'>

                    <Text className='font-rubik text-2xl text-black'>Who's chipping in?</Text>
                    <View className='flex flex-col h-full'>
                        <View className='flex flex-col gap-y-2'>
                            <ChippingInSelection loading={totalCost == 0} onSelect={handleSetSelectedPeopleChippingIn} mainText='Everyone' selected={selectedPeopleChippingIn == 'Everyone'} />
                            <ChippingInSelection loading={totalCost == 0} onSelect={handleSetSelectedPeopleChippingIn} mainText='Select members' selected={selectedPeopleChippingIn == 'Select members'} />
                            <ChippingInSelection loading={totalCost == 0} onSelect={handleSetSelectedPeopleChippingIn} mainText='Only me' selected={selectedPeopleChippingIn == 'Only me'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='bg-white flex flex-col-reverse gap-y-2 py-6 pb-12 px-5'>
                <Button text="Continue" backgroundColour={colours.offBlack} textColor='white' type='light' onPress={() => { }} />
                <Info className='' description="You're 1 step away from tripling your crew's performance. 🎯" backgroundColour={colours.offWhite} />
            </View>
        </View>

    )
}

export default PaymentScreen