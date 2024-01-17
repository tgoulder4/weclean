import { View, Text, ScrollView, Pressable, useColorScheme, Appearance } from 'react-native'
import React, { useEffect, useRef } from 'react'
import AnimatedStairs from './GoPro/AnimatedStairs'
import Pod from '../Ui/Pod';
import { colours, spacing } from '../../lib/constants';
import Button from '../Ui/button';
import ProPerk from './GoPro/ProPerk';
import performHaptic from '../../lib/performHaptic';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { useNavigation } from '@react-navigation/native';
import { pricePerCrewMember } from '../../lib/backend/mockData';
import { getPerks } from '../../lib/backend/actions';
import { IGoProPerk, ILevelUpPerk } from '../../lib/types';
import { Screen } from '../ScreenFactory';
const GoProScreen = () => {
    // const { andText } = route.params;
    const navigation = useNavigation()
    const actionSheetRef = useRef<ActionSheetRef>(null);
    let colourScheme = useColorScheme();
    const [perks, setPerks] = React.useState({} as { goProScreen: IGoProPerk[], levellingUpScreen: ILevelUpPerk[] });
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
    // Appearance.setColorScheme("dark")
    useEffect(() => {
        async function main() {
            const perks = await getPerks();
            console.log("perks: ", perks)
            setPerks(perks);
        }
        main();
    }, [])
    return (
        <Screen darkMode={true} bottomStickyElement={
            <View className='w-full h-56 py-6 px-4 bg-[#080808] flex flex-col items-center'>
                <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Let's go!" backgroundColour='white' textColor='black' type='light' customOnPress={() => { navigation.navigate("Levelling Up" as never) }} />
                <Pressable className='mt-4'
                    onPressOut={() => { handleNoThanksGoBack() }}
                >
                    <Text className='font-afa text-base text-gray-400'>No thanks, go back</Text>
                </Pressable>
            </View>
        }
            customTitle={
                <View className='flex flex-row justify-between w-full'>
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
                        <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Sounds good!" backgroundColour='#1D1D1D' textColor='white' type='light' customOnPress={() => { navigation.navigate("Levelling Up" as never) }} />
                        <Pressable
                            onPressOut={handleIllThinkAboutIt}>
                            <Text style={{ color: colours.light.textSecondary }} className='font-afa text-base text-center mt-[10px]'>I'll think about it</Text>
                        </Pressable>
                    </View>
                </View>
            </ActionSheet>
            {/* MODAL CONTENT: */}
        </Screen>
    )
}

export default GoProScreen