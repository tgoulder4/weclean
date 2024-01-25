import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import Pod from './Pod'
import { IColour } from '../../lib/types';
import tinycolor from 'tinycolor2';

type InfoProps = {
    title?: string;
    style?: StyleProp<ViewStyle>;
    customAlpha?: number;
    description?: string;
    className?: string;
    backgroundColour?: string;
    /**like bg-white or bg-[#ABC] */
    children?: React.ReactNode;
    centerAligned?: boolean;
    customPadding?: { paddingX?: number, paddingY?: number }
}
const Info = (props: InfoProps) => {
    const { centerAligned, style, customAlpha } = props;
    return (
        <Pod style={[style, { backgroundColor: tinycolor(props.backgroundColour).setAlpha(customAlpha ? customAlpha : 0.4).toString() }]}
            customPadding={props.customPadding}
            customBorder={{ width: -2 }}

        >
            <View className={`flex flex-col ${centerAligned ? "center items-center" : ""}`}>
                {
                    props.title ?
                        <Text className={`font-afaB text-lg ${centerAligned ? "text-center" : ""} text-black leading-5`}>{props.title}</Text>
                        : <></>
                }
                <Text
                    // allowFontScaling={true}
                    className={`font-afaB ${centerAligned ? "text-center" : ""} text-base text-black `}>{props.description}</Text>
            </View>
            {props.children}
        </Pod>
    )
}

export default Info