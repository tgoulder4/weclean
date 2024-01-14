import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Button from '../Ui/button'
import { spacing } from '../../lib/constants'
import { useNavigation } from '@react-navigation/native'

const LevellingUpScreen = () => {
    const navigation = useNavigation()
    return (
        <Screen darkMode={true} bottomStickyElement={
            <View style={{ rowGap: spacing.gaps.groupedElement }} className='w-full h-72 py-6 px-4 bg-[#080808] flex flex-col items-center'>
                <Text className='text-white font-afaB text-center text-base'>
                    You're 1 step away from doubling your team's performance! 🎯
                </Text>
                <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Let's go!" backgroundColour='white' textColor='black' type='light' onPress={() => { navigation.navigate("Payment" as never) }} />
            </View>
        } title='Levelling up...'>
            <Text>Test</Text>
        </Screen>
    )
}

export default LevellingUpScreen