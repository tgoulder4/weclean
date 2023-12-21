import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
export type ImpactProps = "light" | "medium" | "heavy" | "error" | "warning" | "success";
type buttonProps = {
    text: string;

    backgroundColour: string;

    /**Like text-white or text-[#ABC] */
    textColor: string;
    type: ImpactProps;

    onPress: () => void;

    hasTopMargin?: boolean;

}
function performHaptic(type: "light" | "medium" | "heavy" | "error" | "warning" | "success") {
    switch (type) {
        case "light":
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            break;
        case "medium":
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            break;
        case "heavy":
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            break;
        case "error":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            break;
        case "warning":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            break;
        case "success":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            break;
    }
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
        <Pressable style={{ transform: [{ translateY: offset }], shadowColor: 'black', shadowOpacity: shadow ? 0.5 : 0, shadowOffset: { width: 0, height: 4 }, shadowRadius: 0 }} className={`${props.hasTopMargin ? 'mt-2' : ''} bg-${props.backgroundColour} w-min px-3 py-2  rounded-md`} onPressIn={handleOnPressIn} onPressOut={handleOnPressOut}>
            <Text className={`font-afaB text-${props.textColor}`}>{props.text}</Text>
        </Pressable>
    )
}

export default Button