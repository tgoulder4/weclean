import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
type buttonProps = {
    text: string;

    /**like [#value] or white */
    backgroundColor: string;

    textColor: string;

    onPress: () => void;

    hasTopMargin?: boolean;

}
const Button = (props: buttonProps) => {
    return (
        <Pressable className={`${props.hasTopMargin ? 'mt-2' : ''} bg-${props.backgroundColor} w-min px-3 py-2 rounded-md`} onPress={props.onPress}>
            <Text className={`font-afaB text-${props.textColor}`}>{props.text}</Text>
        </Pressable>
    )
}

export default Button