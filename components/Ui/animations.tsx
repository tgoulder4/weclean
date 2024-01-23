import * as Animatable from 'react-native-animatable';
import { View, Text, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import { colours } from '../../lib/constants';
export const pulse = {
    0: {
        opacity: 0.5,
    },
    0.5: {
        opacity: 1,
    },
    1: {
        opacity: 0.5,
    },
};
export const spin = {
    0: {
        transform: [{ rotate: '0deg' }],
    },
    0.5: {
        transform: [{ rotate: '180deg' }],
    },
    1: {
        transform: [{ rotate: '360deg' }],
    },
};

export const PulseComponent = (props: { style?: StyleProp<ViewStyle>, children?: React.ReactNode }) => {
    const { style } = props;
    return (
        <Animatable.View style={[style, { borderRadius: 5, backgroundColor: colours.light.input.border }]} animation={pulse} iterationCount="infinite">
            {props.children}
        </Animatable.View>
    )
}
export const SpinComponent = (props: { children: React.ReactNode }) => {
    return (
        <Animatable.View animation={spin} iterationCount="infinite">
            {props.children}
        </Animatable.View>
    )
}