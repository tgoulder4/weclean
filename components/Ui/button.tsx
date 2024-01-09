import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, AnimatableStringValue, StyleProp, ViewStyle } from 'react-native';
import { IColour } from '../../lib/types';
import performHaptic from '../../lib/performHaptic';
export type ImpactProps = "light" | "medium" | "heavy" | "error" | "warning" | "success";
type buttonProps = {
    text: string;

    /**Like white or [#ABC] */
    backgroundColour: IColour;

    /**Like text-white or text-[#ABC] */
    textColor: string;
    type: ImpactProps;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
    fullWidth?: boolean;
    hasTopMargin?: boolean;
    customHeight?: number;
    className?: string;

}
const Button = ({
    text,
    backgroundColour,
    textColor,
    type,
    onPress,
    hasTopMargin,
    customHeight,
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
        <Pressable {...others} style={[style, { transform: [{ translateY: offset }], shadowColor: backgroundColour, shadowOpacity: shadow ? 0.5 : 0, shadowOffset: { width: 0, height: 4 }, shadowRadius: 0 }]} className={className + ` bg-${backgroundColour} px-3 py-2 justify-center items-center rounded-md`} onPressIn={handleOnPressIn} onPressOut={handleOnPressOut}>
            <Text allowFontScaling={true} className={`font-afaB text-${textColor}`}>{text}</Text>
        </Pressable>
    )
}

export default Button