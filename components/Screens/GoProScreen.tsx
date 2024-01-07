import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import AnimatedStairs from './GoPro/AnimatedStairs'
import Pod from '../Ui/Pod';
import { colours, spacing } from '../../lib/constants';
import Button from '../Ui/button';
import ProPerk from './GoPro/ProPerk';
import performHaptic from '../../lib/performHaptic';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import Benefits from './GoPro/Benefits';
import { useNavigation } from '@react-navigation/native';
import { pricePerCrewMember } from '../../lib/backend/actions';
const GoProScreen = ({ route }) => {
    // const { andText } = route.params;
    const navigation = useNavigation()
    const actionSheetRef = useRef<ActionSheetRef>(null);
    function handleNoThanksGoBack() {
        //open modal
        actionSheetRef.current?.show();
        performHaptic("light")
        // navigation.goBack()
    }
    function handleIllThinkAboutIt() {
        //close modal
        actionSheetRef.current?.hide();
        navigation.goBack()
    }
    useEffect(() => {
        console.log("route object: ", route)
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
                        <Text className='font-afa text-base text-white my-[20px]'>
                            Pro Crews are 3x more likely to complete their tasks on time and
                            {/* {andText} */}
                        </Text>
                        <Benefits />
                        <Text className='font-afa text-base text-center text-white mb-[20px]'>
                            From £{pricePerCrewMember}/mo. Cancel anytime with no penalties or fees.
                        </Text>
                    </View>

                </ScrollView>
                <ActionSheet ref={actionSheetRef} defaultOverlayOpacity={0.6} containerStyle={{ height: 'auto', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                    <View className='py-8 px-4 pb-12'>
                        <View className='flex flex-col gap-y-2 '>
                            <Text style={{ marginTop: spacing.gaps.normal, marginBottom: spacing.gaps.smaller }} className='font-rubik text-xl text-black'>Split the price?</Text>
                            <Text style={{ marginBottom: spacing.gaps.normal }} className='font-afa text-black text-base'>Don't miss out! Share the subscription among your crew to go Pro for as little as £{pricePerCrewMember}/month.</Text>
                        </View>
                        <View className='flex flex-col gap-y-2'>
                            <Button fullWidth={true} customHeight={50} hasTopMargin={true} text="Sounds good!" backgroundColour='[#1D1D1D]' textColor='white' type='light' onPress={() => { }} />
                            <Pressable
                                onPressOut={handleIllThinkAboutIt}>
                                <Text className='font-afa text-gray-400 text-center mt-[10px]'>I'll think about it</Text>
                            </Pressable>
                        </View>
                    </View>
                </ActionSheet>
                <View className='w-full h-56 py-6 px-5 bg-[#080808] flex flex-col items-center'>
                    <Button fullWidth={true} customHeight={50} hasTopMargin={false} text="Let's go!" backgroundColour='white' textColor='black' type='light' onPress={() => { navigation.navigate("Payment" as never) }} />
                    <Pressable className='mt-4'
                        onPressOut={() => { handleNoThanksGoBack() }}
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