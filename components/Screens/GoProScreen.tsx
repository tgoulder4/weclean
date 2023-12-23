import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import AnimatedStairs from './GoPro/AnimatedStairs'
import { Link } from 'expo-router';
import Info from '../Ui/Info';
import Pod from '../Ui/Pod';
import { foregroundColour } from '../../lib/constants';
import Button from '../Ui/button';
import ProPerk from './GoPro/ProPerk';

const GoProScreen = () => {
    return (
        <>
            <ScrollView className=' h-full w-full bg-[#080808] flex flex-col px-2 pt-28 '>
                <View className='flex flex-row justify-between mb-5 w-full'>
                    <Text className='font-rubik text-2xl text-white flex-0 w-4/5' style={{ shadowColor: "#FFFFFF", shadowOffset: { height: 6, width: 0 }, shadowOpacity: 0.25, shadowRadius: 0.8 }}>Elevate Your Crew</Text>
                    <AnimatedStairs />
                </View>
                <Pod backgroundColour={`[${foregroundColour}]`} >
                    <Text className='font-afaB text-white mb-[25px]'>
                        This is a Pro-only competition.
                    </Text>
                    <View className='flex flex-col gap-y-6'>
                        <View className='flex flex-col gap-y-5'>
                            <ProPerk perkText="Create a rota in seconds, instantly putting your team into action 📅" />
                            <ProPerk perkText="Get cleaning supplies on us twice a year 🧼" />
                            <ProPerk perkText="Entry into monthly Pro-Only competitions (e.g. win £££) 💸" />
                            <ProPerk perkText="Join multiple Crews" />
                        </View>
                    </View>
                </Pod>
            </ScrollView>
            <View className='absolute bottom-0 left-0 w-full h-56 py-6 px-5 bg-[#080808] flex flex-col items-center'>
                <Button fullWidth={true} customHeight={50} hasTopMargin={false} text="Let's go!" backgroundColour='white' textColor='black' type='light' onPress={() => { }} />
                <Pressable className='mt-4' onPress={() => { }}>
                    <Text className='font-afa text-gray-400'>No thanks, go back</Text>
                </Pressable>
            </View>
        </>
    )
}

export default GoProScreen