import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
type buttonProps = {
    text: string;

    className: string;

    /**Like text-white or text-[#ABC] */
    textColor: string;

    onPress: () => void;

    hasTopMargin?: boolean;

}
const Button = (props: buttonProps) => {
    return (
        <Pressable className={` ${props.hasTopMargin ? 'mt-2' : ''} ${props.className} w-min px-3 py-2 rounded-md`} onPress={props.onPress}>
            <Text className={`font-afaB ${props.textColor}`}>{props.text}</Text>
        </Pressable>
    )
}

export default Button