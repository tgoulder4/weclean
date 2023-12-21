import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { IColour } from '../../../App';
import Button from '../../Ui/button';
import { useAssets } from 'expo-asset';
import images from '../../../lib/images';
import ProfilePic, { User } from '../../User/ProfilePic';

export type ActivityEventProps = {
    user: {
        name: string;
    },
    usersWhoMadeRequest?: User[];
    task: {
        summary: string;
        type: "Rota" | "Request" | "Courtesy";
        media?: string;
        completionTime: string;
    }
}

function getAfterText(dateAgo: string, taskType: string): React.ReactNode {
    function getPrecedingText(taskType: string): string {
        switch (taskType) {
            case "Rota":
                return "as rota task"
            case "Request":
                return "by request"
            case "Courtesy":
                return "out of courtesy"
            default:
                return "-"
        }
    }
    return (
        <View className='flex flex-row justify-between'>
            <Text className='font-afa text-gray-500'>{dateAgo}, {getPrecedingText(taskType)}</Text>
            <Button text='😻' backgroundColour="gray-300" onPress={() => { }} textColor='text-black' />
        </View>
    )
}
const ActivityEvent = (props: ActivityEventProps) => {
    const { name } = props.user;
    const { usersWhoMadeRequest } = props;
    const { summary, type, media, completionTime } = props.task;
    return (
        <Pod backgroundColour="white" variant={media ? 'pod-media-pod' : 'pod'} media={media} secondPodContent={getAfterText(completionTime + " ago", props.task.type)}>
            <View className='flex flex-row justify-between'>
                <View className='flex-1 flex flex-col gap-y-1 mr-[10%]'>
                    <Text className='font-afaB uppercase text-black'>{name}</Text>
                    <Text className='font-afa'>{summary}</Text>
                    {!media ? <Text className='font-afa text-gray-500'>{getAfterText(completionTime + " ago", props.task.type)}</Text> : <></>}
                </View>
                {type == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : type == "Courtesy" ? (images['kindness'] ? <Image className='w-12 h-12 object-contain' source={images['kindness']} /> : null) : <ProfilePic users={usersWhoMadeRequest!} />}
            </View>
        </Pod >
    )
}

export default ActivityEvent