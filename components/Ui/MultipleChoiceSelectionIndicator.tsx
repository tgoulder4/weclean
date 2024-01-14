import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colours } from '../../lib/constants'

const MultipleChoiceSelectionIndicator = (props: { selected: boolean, style?: StyleProp<ViewStyle> }) => {
    return (
        <View style={[props.style, { backgroundColor: colours.dark.input.background, borderColor: colours.dark.input.border }]} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
            {props.selected ? <View style={{ backgroundColor: colours.dark.input.indicator }} className='w-5 h-5 rounded-full '></View> : <></>}
        </View>
    )
}

export default MultipleChoiceSelectionIndicator