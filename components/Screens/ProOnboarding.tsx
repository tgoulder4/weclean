import { View, Text, ScrollView, Pressable, useColorScheme, Appearance } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedStairs from './GoPro/AnimatedStairs'
import Pod from '../Ui/Pod';
import { colours, spacing } from '../../lib/constants';
import Button from '../Ui/button';
import ProPerk from './GoPro/ProPerk';
import performHaptic from '../../lib/performHaptic';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { useNavigation } from '@react-navigation/native';
import { pricePerCrewMember } from '../../lib/backend/mockData';
import { IGoProPerk, ILevelUpPerk } from '../../lib/types';
import { Screen } from '../ScreenFactory';
import PerkListing from './LevelUp/PerkListing';
import PaymentScreen from './PaymentScreen';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProOnboarding = () => {
    // const { andText } = route.params;
    const navigation = useNavigation()
    const actionSheetRef = useRef<ActionSheetRef>(null);
    const [perks, setPerks] = React.useState({} as { goProScreen: IGoProPerk[], levellingUpScreen: ILevelUpPerk[] });
    const [stage, setStage] = React.useState("goProScreen"); //can be goProScreen or levellingUpScreen
    function handleNoThanksGoBack() {
        //open modal
        actionSheetRef.current?.show();
        performHaptic("light")
    }
    function handleIllThinkAboutIt() {
        //close modal
        actionSheetRef.current?.hide();
        handleGoBack()
    }
    function handleGoBack() {
        setStage("goProScreen");
        navigation.goBack()
    }
    function paymentScrnGoback() {
        Alert.alert("Exit elevation?", "Are you sure you want to exit elevating your crew?", [
            {
                text: "Cancel",
                onPress: () => { },
                style: "cancel"
            },
            {
                text: "Exit",
                onPress: () => { handleGoBack() },
                style: "destructive"
            }

        ]);
    }
    const darkModeRestOfOnboarding = false;
    // Appearance.setColorScheme("dark")
    useEffect(() => {
        async function main() {
            const perks = await AsyncStorage.getItem("perks").then((perks) => {
                return perks ? JSON.parse(perks) : null
            });
            setPerks(perks);
        }
        main();
    }, [])
    return (<>
        {
            stage == "goProScreen" ?
                <Screen darkMode={true} bottomStickyElement={
                    <View className='w-full h-56 py-6 px-4 bg-[#080808] flex flex-col items-center'>
                        <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Let's go!" backgroundColour='white' textColor='black' type='light' customOnPress={() => { setStage("levellingUpScreen") }} />
                        <Pressable className='mt-4'
                            onPressOut={() => { handleNoThanksGoBack() }}
                        >
                            <Text className='font-afa text-base text-gray-400'>No thanks, go back</Text>
                        </Pressable>
                    </View>
                }
                    customTitle={
                        <View className='mt-8 flex flex-row justify-between w-full'>
                            <Text className='font-rubik text-xl text-white flex-0 w-64' style={{ shadowColor: "#FFFFFF", shadowOffset: { height: 6, width: 0 }, shadowOpacity: 0.25, shadowRadius: 0.8 }}>Elevate Your Crew</Text>
                            <AnimatedStairs />
                        </View>
                    }>
                    <View style={{ rowGap: spacing.gaps.separateElement }} className='flex flex-col'>

                        <Text className='font-afa text-base text-white'>
                            Pro Crews are 3x more likely to complete their tasks on time.
                            {/* {andText} */}
                        </Text>
                        <Pod style={{ backgroundColor: colours.dark.primary }} customBorder={{ width: -2 }} >
                            <View className='flex flex-col'>
                                {
                                    perks.goProScreen ? perks.goProScreen.map((perk, index) => <ProPerk badge={perk.badge} doesntHaveBottomDivide={index == perks.goProScreen.length - 1} key={index} perkIcon={perk.icon} perkTitle={perk.title} perkText={perk.description} />) : <></>
                                }
                            </View>
                        </Pod>
                        <Text className='font-afa text-base text-center text-white'>
                            From £{pricePerCrewMember}/mo. Cancel anytime with no penalties or fees.
                        </Text>
                    </View>

                    <ActionSheet ref={actionSheetRef} defaultOverlayOpacity={0.6} containerStyle={{ height: 'auto', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View className='pt-4 px-4 pb-12'>
                            <View className='flex flex-col '>
                                <Text style={{ marginTop: spacing.gaps.separateElement, marginBottom: spacing.gaps.groupedElement }} className='font-rubik text-xl text-black'>Split the price?</Text>
                                <Text style={{ marginBottom: spacing.gaps.separateElement }} className='font-afa text-black text-base'>Don't miss out! Share the subscription among your crew to go Pro for as little as £{pricePerCrewMember}/month.</Text>
                            </View>
                            <View className='flex flex-col'>
                                <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Sounds good!" backgroundColour='#1D1D1D' textColor='white' type='light' customOnPress={() => {
                                    setStage("levellingUpScreen")
                                }} />
                                <Pressable
                                    onPressOut={handleIllThinkAboutIt}>
                                    <Text style={{ color: colours.light.textSecondary }} className='font-afa text-base text-center mt-[10px]'>I'll think about it</Text>
                                </Pressable>
                            </View>
                        </View>
                    </ActionSheet>
                    {/* MODAL CONTENT: */}
                </Screen>
                : stage == "levellingUpScreen" ?
                    <Screen darkMode={darkModeRestOfOnboarding} bottomStickyElement={
                        <View style={{ rowGap: spacing.gaps.groupedElement, backgroundColor: darkModeRestOfOnboarding ? colours.dark.background : colours.light.background }} className='w-full h-72 py-6 px-4 flex flex-col items-center'>
                            <Text style={{ color: darkModeRestOfOnboarding ? colours.dark.textPrimary : colours.light.textPrimary }} className='text-white font-afaB text-center text-base'>
                                You're 1 step away from doubling your team's performance! 🎯
                            </Text>
                            <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Let's go!" backgroundColour={darkModeRestOfOnboarding ? colours.light.primary : colours.dark.primary} textColor={darkModeRestOfOnboarding ? 'black' : 'white'} type='light' customOnPress={() => { setStage("paymentScreen") }} />
                        </View>
                    } title='Levelling up...'>
                        <View className='relative flex flex-col'>
                            {/* the free pro header */}
                            <View className='grid grid-cols-levelUpPerk grid-rows-[1fr]'>
                                <View className='hidden'></View>
                                <Text style={{ color: darkModeRestOfOnboarding ? colours.dark.textPrimary : colours.light.textPrimary }} className='  font-afa text-base'>Free</Text>
                                <Text style={{ color: darkModeRestOfOnboarding ? colours.dark.textPrimary : colours.light.textPrimary }} className='font-rubik text-base'>PRO</Text>
                            </View>
                            {/* the pro background highlight */}
                            <View style={{ backgroundColor: darkModeRestOfOnboarding ? colours.dark.primary : colours.light.primary, zIndex: -1 }} className='rounded-xl absolute top-0 origin-top-right right-0 w-24 h-full'></View>
                            {/* for each perk.levelupscreen, map */}
                            {
                                perks.levellingUpScreen ? perks.levellingUpScreen.map((perk, index) => <PerkListing darkMode={darkModeRestOfOnboarding} key={index} tickedForFree={perk.tickedForFree} tickedForPro={perk.tickedForPro} doesntHaveBottomDivide={index == perks.levellingUpScreen.length - 1} text={perk.description} />) : <></>
                            }
                        </View>
                    </Screen>
                    : stage == "paymentScreen" ? <PaymentScreen darkMode={darkModeRestOfOnboarding} paymentScreenGoBack={paymentScrnGoback} /> : <Text>There was an error.</Text>
        }</>
    )
}

export default ProOnboarding