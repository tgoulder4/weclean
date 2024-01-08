import { View, Text } from 'react-native'
import React from 'react'
import Pod from './Pod'
import { IColour } from '../../lib/types';

type InfoProps = {
    title?: string;
    description?: string;
    className?: string;
    /**like bg-white or bg-[#ABC] */
    children?: React.ReactNode;
    backgroundColour: IColour;
    centerAligned?: boolean;
    customPadding?: { paddingX?: number, paddingY?: number }
}
const Info = (props: InfoProps) => {
    const { centerAligned } = props;
    return (
        <Pod
            customPadding={props.customPadding}
            noStroke={true} backgroundColour={props.backgroundColour}>
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