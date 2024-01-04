import { View, Text } from 'react-native'
import React from 'react'
import Pod from './Pod'
import { IColour } from '../../lib/constants';

type InfoProps = {
    title?: string;
    description?: string;
    className?: string;
    /**like bg-white or bg-[#ABC] */
    children?: React.ReactNode;
    backgroundColour: IColour;
}
const Info = (props: InfoProps) => {
    return (
        <Pod noStroke={true} backgroundColour={props.backgroundColour}>
            <View className='flex flex-col gap-y-2'>
                {
                    props.title ?
                        <Text className='font-afaB text-lg text-black leading-5'>{props.title}</Text>
                        : <></>
                }
                <Text allowFontScaling={true} className='font-afa border-2 border-red-500 text-black leading-5'>{props.description}</Text>
            </View>
            {props.children}
        </Pod>
    )
}

export default Info