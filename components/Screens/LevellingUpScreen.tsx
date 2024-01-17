import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Button from '../Ui/button'
import { colours, spacing } from '../../lib/constants'
import { useNavigation } from '@react-navigation/native'
import PerkListing from './LevelUp/perkListing'

const LevellingUpScreen = () => {
    const navigation = useNavigation();
    return (
        <Screen darkMode={true} bottomStickyElement={
            <View style={{ rowGap: spacing.gaps.groupedElement }} className='w-full h-72 py-6 px-4 bg-[#080808] flex flex-col items-center'>
                <Text className='text-white font-afaB text-center text-base'>
                    You're 1 step away from doubling your team's performance! 🎯
                </Text>
                <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Let's go!" backgroundColour='white' textColor='black' type='light' customOnPress={() => { navigation.navigate("Payment" as never) }} />
            </View>
        } title='Levelling up...'>
            <View className='relative flex flex-col'>
                {/* the free pro header */}
                <View className=' grid grid-cols-levelUpPerk'>
                    <View className='hidden'></View>
                    <Text className='text-white  font-afa text-base'>Free</Text>
                    <Text className='text-white font-rubik text-base'>PRO</Text>
                </View>
                {/* the pro background highlight */}
                <View style={{ backgroundColor: colours.dark.primary }} className='absolute top-0 origin-top-right right-0 w-24 h-full'></View>
                {/* for each perk.levelupscreen, map */}
                <PerkListing />
            </View>
        </Screen>
    )
}

export default LevellingUpScreen