import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, AnimatableStringValue } from 'react-native';
import { IColour } from '../../App';
import performHaptic from '../../lib/performHaptic';
export type ImpactProps = "light" | "medium" | "heavy" | "error" | "warning" | "success";
type buttonProps = {
    text: string;

    /**Like white or [#ABC] */
    backgroundColour: IColour;

    /**Like text-white or text-[#ABC] */
    textColor: string;
    type: ImpactProps;

    onPress: () => void;
    fullWidth?: boolean;
    hasTopMargin?: boolean;
    customHeight?: number;

}
const Button = (props: buttonProps) => {
    const [shadow, setShadow] = useState(true);
    const [offset, setOffset] = useState(0)
    function handleOnPressIn() {
        setOffset(5);
        performHaptic(props.type);
        setShadow(false);
        props.onPress();
    }
    function handleOnPressOut() {
        setOffset(0);
        setShadow(true);
    }
    return (
        <Pressable style={{ height: props.customHeight ? props.customHeight : "auto", transform: [{ translateY: offset }], shadowColor: props.backgroundColour, shadowOpacity: shadow ? 0.5 : 0, shadowOffset: { width: 0, height: 4 }, shadowRadius: 0 }} className={`${props.fullWidth ? "w-full" : ""} ${props.hasTopMargin ? 'mt-2' : ''} bg-${props.backgroundColour} w-min px-3 py-2 justify-center items-center rounded-md`} onPressIn={handleOnPressIn} onPressOut={handleOnPressOut}>
            <Text className={`font-afaB text-${props.textColor}`}>{props.text}</Text>
        </Pressable>
    )
}

export default Button