import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
type buttonProps = {
    text: string;

    backgroundColour: string;

    /**Like text-white or text-[#ABC] */
    textColor: string;

    onPress: () => void;

    hasTopMargin?: boolean;

}
const Button = (props: buttonProps) => {
    const [shadow, setShadow] = useState(true);
    const [offset, setOffset] = useState(0)
    function handleOnPressIn() {
        setOffset(5);
        setShadow(false);
        props.onPress();
    }
    function handleOnPressOut() {
        setOffset(0);
        setShadow(true);
    }
    return (
        <Pressable style={{ transform: [{ translateY: offset }], shadowColor: 'black', shadowOpacity: shadow ? 0.5 : 0, shadowOffset: { width: 0, height: 4 }, shadowRadius: 0 }} className={`${props.hasTopMargin ? 'mt-2' : ''} bg-${props.backgroundColour} w-min px-3 py-2  rounded-md`} onPressIn={handleOnPressIn} onPressOut={handleOnPressOut}>
            <Text className={`font-afaB text-${props.textColor}`}>{props.text}</Text>
        </Pressable>
    )
}

export default Button