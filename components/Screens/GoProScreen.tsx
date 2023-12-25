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
        <View className='flex flex-col h-full flex-1'>
            {/* scrollview is bg-[#080808] */}
            <ScrollView className='bg-yellow-500 border-red-500 border-2 flex-1  gap-y-4'>
                <View className='px-2 pt-28'>


                    <View className='flex flex-row justify-between w-full'>
                        <Text className='font-rubik text-2xl text-white flex-0 w-64' style={{ shadowColor: "#FFFFFF", shadowOffset: { height: 6, width: 0 }, shadowOpacity: 0.25, shadowRadius: 0.8 }}>Elevate Your Crew</Text>
                        <AnimatedStairs />
                    </View>
                    <Text className='font-afa text-white mb-[20px]'>
                        Enjoy this feature and many more with Pro from £2.49/month.
                    </Text>
                    <Pod backgroundColour={`[${foregroundColour}]`} noStroke={true} >
                        <View className='flex flex-col'>
                            <ProPerk perkTitle='Monthly Cleaning Supplies 🧼' perkText="Get regular cleaning supplies on us" />
                            <ProPerk perkTitle='Automated Rota 📅' perkText="Create a rota in seconds, instantly putting your team into action" />
                            <ProPerk perkTitle='Entry into Pro-Only Competitions 💸' perkText="Win exclusive cash prizes in competitions of cleanliness" />
                            <ProPerk perkTitle="Join multiple crews" perkText="Join multiple Crews" />
                        </View>
                    </Pod>
                    <Text className='font-afa text-center text-white mb-[20px]'>
                        Enjoy this feature and many more with Pro from £2.49/month.
                    </Text>
                </View>

            </ScrollView>

            <View className='w-full h-56 py-6 px-5 bg-[#080808] flex flex-col items-center'>
                <Button fullWidth={true} customHeight={50} hasTopMargin={false} text="Let's go!" backgroundColour='white' textColor='black' type='light' onPress={() => { }} />
                <Pressable className='mt-4'
                // onPress={() => { navigation.navigate}}
                >
                    <Text className='font-afa text-gray-400'>No thanks, go back</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default GoProScreen