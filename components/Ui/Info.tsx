import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import Pod from './Pod'
import { IColour } from '../../lib/types';
import tinycolor from 'tinycolor2';

type InfoProps = {
    title?: string;
    style?: StyleProp<ViewStyle>;
    description?: string;
    className?: string;
    backgroundColour?: string;
    /**like bg-white or bg-[#ABC] */
    children?: React.ReactNode;
    centerAligned?: boolean;
    customPadding?: { paddingX?: number, paddingY?: number }
}
const Info = (props: InfoProps) => {
    const { centerAligned, style } = props;
    return (
        <Pod style={[style, { backgroundColor: tinycolor(props.backgroundColour).lighten(40).toString() }]}
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
                    className={`font-afa ${centerAligned ? "text-center" : ""} text-base border-2 border-red-500 text-black `}>{props.description}</Text>
            </View>
            {props.children}
        </Pod>
    )
}

export default Info