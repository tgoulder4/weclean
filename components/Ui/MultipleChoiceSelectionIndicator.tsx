import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colours } from '../../lib/constants'

const MultipleChoiceSelectionIndicator = (props: { darkMode?: boolean, selected: boolean, style?: StyleProp<ViewStyle> }) => {
    const { darkMode } = props;
    return (
        <View style={[props.style, { backgroundColor: darkMode ? colours.dark.input.background : colours.light.input.background, borderColor: darkMode ? colours.dark.input.border : colours.light.input.border }]} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
            {props.selected ? <View style={{ backgroundColor: darkMode ? colours.dark.input.indicator : colours.light.input.indicator }} className='w-5 h-5 rounded-full '></View> : <></>}
        </View>
    )
}

export default MultipleChoiceSelectionIndicator