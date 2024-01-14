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
            <View className='w-full h-56 py-6 px-4 bg-[#080808] flex flex-col items-center'>
                <Button style={{ height: 50, width: "100%", marginTop: spacing.gaps.groupedElement }} text="Let's go!" backgroundColour='white' textColor='black' type='light' onPress={() => { }} />
                <Pressable className='mt-4'
                    onPressOut={() => { navigation.navigate("Payment" as never) }}
                >
                    <Text className='font-afa text-base text-gray-400'>No thanks, go back</Text>
                </Pressable>
            </View>
        } title='Levelling up...'>
            <Text>Test</Text>
        </Screen>
    )
}

export default LevellingUpScreen