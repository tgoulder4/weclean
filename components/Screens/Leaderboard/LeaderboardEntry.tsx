import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod'

type LeaderboardProps = {
    position: number;
    crew: {
        name: string;
        photo: string;
        score: number;
    }
}
const LeaderboardEntry = (props: LeaderboardProps) => {
    const { name, photo, score } = props.crew;
    const { position } = props;
    return (
        <Pod style={{ backgroundColor: 'white' }} variant='pod'>
            <View className='flex flex-row justify-between'>
                <View className='flex flex-row flex-1 gap-x-2'>
                    <Text className='font-afaB text-base text-black'>{position}.</Text>
                    <View className='flex flex-row gap-x-2 items-start'>
                        <Image className='w-8 h-8 rounded-full' source={{ uri: photo }}></Image>
                        <Text numberOfLines={1} ellipsizeMode='tail' className='font-afaB truncate text-base text-black'>{name}</Text>
                    </View>
                </View>
                <Text className='font-afaB flex-1 text-right text-base text-green-700'>{score}★</Text>
            </View>
        </Pod>
    )
}

export default LeaderboardEntry