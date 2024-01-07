import { View, Text } from 'react-native'
import React from 'react'

const MultipleChoiceSelectionIndicator = (props: { selected: boolean }) => {
    return (
        <View className='w-8 h-8 rounded-full border-2 border-black flex justify-center items-center'>
            {props.selected ? <View className='w-6 h-6 rounded-full bg-black'></View> : <></>}
        </View>
    )
}

export default MultipleChoiceSelectionIndicator