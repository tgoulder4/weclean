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
    const [loadingPrices, setLoadingPrices] = useState(true);
    //fetch price pppm
    function handleSetSelectedPeopleChippingIn(newSelectedPeopleChippingIn: string) {
        performHaptic("selection")
        setSelectedPeopleChippingIn(newSelectedPeopleChippingIn)
    }
    let totalCost = 10;
    useEffect(() => {
        async function getPrices() {
            await getUsersInCrew("abc").then((users) => {
                totalCost = users.length * pricePerCrewMember
            });
            setLoadingPrices(false);
        }
        getPrices()
    }, [])

    return (
        <View className='flex flex-col h-full flex-1'>
            <ScrollView className=' bg-white border-2 h-full gap-y-4'>
                <View className='px-2 pt-28 gap-y-2'>

                    <Text className='font-rubik text-2xl text-black'>Who's chipping in?</Text>
                    <View className='flex flex-col h-full'>
                        <View className='flex flex-col gap-y-2'>
                            <ChippingInSelection loading={loadingPrices} onSelect={handleSetSelectedPeopleChippingIn} mainText='Everyone' selected={selectedPeopleChippingIn == 'Everyone'} />
                            <ChippingInSelection loading={loadingPrices} onSelect={handleSetSelectedPeopleChippingIn} mainText='Select members' selected={selectedPeopleChippingIn == 'Select members'} />
                            <ChippingInSelection loading={loadingPrices} onSelect={handleSetSelectedPeopleChippingIn} mainText='Only me' selected={selectedPeopleChippingIn == 'Only me'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='bg-white  gap-y-2 h-56 py-6 px-5'>
                <Info className='w-full ' description="You're 1 step away from tripling your crew's performance. 🎯" backgroundColour={colours.offWhite} />
                <Button text="Continue" backgroundColour={colours.offBlack} textColor='white' type='light' onPress={() => { }} />
            </View>
        </View>

    )
}

export default PaymentScreen