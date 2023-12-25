import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import AnimatedStairs from './GoPro/AnimatedStairs'
import Pod from '../Ui/Pod';
import { foregroundColour } from '../../lib/constants';
import Button from '../Ui/button';
import ProPerk from './GoPro/ProPerk';
import performHaptic from '../../lib/performHaptic';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
const GoProScreen = () => {
    const actionSheetRef = useRef<ActionSheetRef>(null);
    function handleNoThanksGoBack() {
        //open modal
        actionSheetRef.current?.show();
        performHaptic("light")
    }
    useEffect(() => {
        performHaptic("error")
    }, [])
    return (
        <>
            <View className='flex flex-col h-full flex-1'>
                <ScrollView className=' bg-[#080808] border-2 flex-1  gap-y-4'>
                    <View className='px-2 pt-28'>
                        <View className='flex flex-row justify-between w-full'>
                            <Text className='font-rubik text-2xl text-white flex-0 w-64' style={{ shadowColor: "#FFFFFF", shadowOffset: { height: 6, width: 0 }, shadowOpacity: 0.25, shadowRadius: 0.8 }}>Elevate Your Crew</Text>
                            <AnimatedStairs />
                        </View>
                        <Text className='font-afa text-white my-[20px]'>
                            This is a Pro-only competition. Enjoy this feature and many more with Pro.
                        </Text>
                        <Pod backgroundColour={`[${foregroundColour}]`} noStroke={true} >
                            <View className='flex flex-col'>
                                <ProPerk perkIcon='🧼' perkTitle='Monthly Cleaning Supplies' perkText="Get regular cleaning supplies to your doorstep" />
                                <ProPerk perkIcon='📅' perkTitle='Automated Rota' perkText="Create a rota in seconds, instantly putting your team into action" />
                                <ProPerk perkIcon='💸' perkTitle='Entry into Pro-Only Competitions' perkText="Win exclusive cash prizes in competitions of cleanliness" />
                                <ProPerk doesntHaveBottomDivide={true} perkIcon='👥' perkTitle="Join multiple crews" perkText="Join multiple Crews" />
                            </View>
                        </Pod>
                        <Text className='font-afa text-center text-white mb-[20px]'>
                            From £2.49/month. Cancel anytime with no penalties or fees.
                        </Text>
                    </View>

                </ScrollView>
                <ActionSheet ref={actionSheetRef}>
                    <View className='flex flex-col gap-y-2 '>
                        <Text className='font-rubik text-xl text-black'>Split the price?</Text>
                        <Text className='font-afa text-black mb-[20px]'>Don't miss out!" Share the subscription among your crew to go Pro for as little as £2.49/month.</Text>
                    </View>
                    <View className='flex flex-col gap-y-2'>
                        <Button fullWidth={true} customHeight={50} hasTopMargin={true} text="Sounds good!" backgroundColour='[#1D1D1D]' textColor='white' type='light' onPress={() => { }} />
                        <Pressable
                            onPress={() => { actionSheetRef.current?.hide(); }}>
                            <Text className='font-afa text-slate-500 text-center'>I'll think about it</Text>
                        </Pressable>
                    </View>
                </ActionSheet>
                <View className='w-full h-56 py-6 px-5 bg-[#080808] flex flex-col items-center'>
                    <Button fullWidth={true} customHeight={50} hasTopMargin={false} text="Let's go!" backgroundColour='white' textColor='black' type='light' onPress={() => { }} />
                    <Pressable className='mt-4'
                        onPress={() => { handleNoThanksGoBack() }}
                    >
                        <Text className='font-afa text-gray-400'>No thanks, go back</Text>
                    </Pressable>
                </View>
            </View>
            {/* MODAL CONTENT: */}
        </>
    )
}

export default GoProScreen