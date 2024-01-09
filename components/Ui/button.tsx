import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, AnimatableStringValue, StyleProp, ViewStyle } from 'react-native';
import { IColour } from '../../lib/types';
import performHaptic from '../../lib/performHaptic';
import tinycolor from 'tinycolor2';
export type ImpactProps = "light" | "medium" | "heavy" | "error" | "warning" | "success";
type buttonProps = {
    text: string;

    /**Like white or [#ABC] */
    backgroundColour: string;

    /**Like text-white or text-[#ABC] */
    textColor: string;
    type: ImpactProps;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
    fullWidth?: boolean;
    className?: string;

}
const Button = ({
    text,
    backgroundColour,
    textColor,
    type,
    onPress,
    className,
    style,
    ...others
}: buttonProps) => {
    const [shadow, setShadow] = useState(true);
    const [offset, setOffset] = useState(0)
    function handleOnPressIn() {
        setOffset(5);
        performHaptic(type);
        setShadow(false);
        onPress();
    }
    function handleOnPressOut() {
        setOffset(0);
        setShadow(true);
    }
    return (
        <Pressable {...others} style={[style, { transform: [{ translateY: offset }], backgroundColor: backgroundColour, shadowColor: tinycolor(backgroundColour).saturate(50).darken(20).toString(), shadowOpacity: shadow ? 0.5 : 0, shadowOffset: { width: 0, height: 4 }, shadowRadius: 0, paddingHorizontal: 12, paddingVertical: 8 }]} className={className + `flex justify-center items-center rounded-md`} onPressIn={handleOnPressIn} onPressOut={handleOnPressOut}>
            <Text allowFontScaling={true} className={`font-afaB text-${textColor}`}>{text}</Text>
        </Pressable>
    )
}

export default Button