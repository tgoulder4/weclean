import { View, Text } from 'react-native'
import React from 'react'
import Pod from './Pod'
import { IColour } from '../../App';

type InfoProps = {
    title?: string;
    description?: string;
    className?: string;
    backgroundColor: IColour;
    children?: React.ReactNode;
}
const Info = (props: InfoProps) => {
    return (
        <Pod noStroke={true} className={props.className} backgroundColor={props.backgroundColor}>
            <View className='flex flex-col gap-y-1'>
                {
                    props.title ?
                        <Text className='font-rubik text-xl text-black font-bold'>{props.title}</Text>
                        : <></>
                }
                <Text className='font-afa text-black'>{props.description}</Text>
            </View>
            {props.children}
        </Pod>
    )
}

export default Info