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
        <Pod backgroundColour='white' variant='pod'>
            <View className='flex flex-row justify-between items-center'>
                <View className='flex flex-row gap-x-2'>
                    <Text className='font-afaB text-lg text-black'>{position}.</Text>
                    <View className='flex flex-row gap-x-2 items-center'>
                        <Image className='w-12 h-12 rounded-full' source={{ uri: photo }}></Image>
                        <Text className='font-afaB truncate  text-lg text-black'>{name}</Text>
                    </View>
                </View>
                <Text className='font-afaB text-lg text-green-700'>{score}★</Text>
            </View>
        </Pod>
    )
}

export default LeaderboardEntry