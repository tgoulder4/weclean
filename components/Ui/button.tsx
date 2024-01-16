import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, AnimatableStringValue, StyleProp, ViewStyle } from 'react-native';
import { IColour } from '../../lib/types';
import performHaptic from '../../lib/performHaptic';
import tinycolor from 'tinycolor2';
export type ImpactProps = "light" | "medium" | "heavy" | "error" | "warning" | "success" | "selection";
type buttonProps = {
    text?: string;

    /**Like white or [#ABC] */
    backgroundColour: string;

    /**Like text-white or text-[#ABC] */
    textColor?: string;
    type: ImpactProps;
    style?: StyleProp<ViewStyle>;
    customOnPress?: () => void;
    fullWidth?: boolean;
    className?: string;
    children?: React.ReactNode;

}
const Button = ({
    text,
    backgroundColour,
    textColor,
    type,
    customOnPress,
    className,
    style,
    children,
    ...others
}: buttonProps) => {
    const [state, setState] = useState({
        shadow: true,
        offset: 0,
    })
    function handleOnPressIn() {
        setState({
            offset: 5,
            shadow: false,
        })
        performHaptic(type);
    }
    function handlePress() {
        setState({
            offset: 0,
            shadow: true,
        })
        if (customOnPress) customOnPress();
    }
    return (
        <Pressable {...others} style={[style, { transform: [{ translateY: state.offset }], backgroundColor: backgroundColour, shadowColor: tinycolor(backgroundColour).darken(10).toString(), shadowOpacity: state.shadow ? 0.5 : 0, shadowOffset: { width: 0, height: 4 }, shadowRadius: 0, paddingHorizontal: 12, paddingVertical: 8 }]} className={className + `flex justify-center items-center rounded-md`} onPressIn={handleOnPressIn} onPress={handlePress}>
            {
                children ? children
                    : <Text allowFontScaling={true} className={`font-afaB text-${textColor}`}>{text}</Text>
            }

        </Pressable>
    )
}

export default Button