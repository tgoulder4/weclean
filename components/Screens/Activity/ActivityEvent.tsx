import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { IColour } from '../../../App';
import Button from '../../Ui/button';

export type ActivityEventProps = {
    user: {
        name: string;
    },
    userWhoMadeRequest?: {
        name: string;
        profileBackgroundColour: IColour;
    }
    task: {
        summary: string;
        type: "Rota" | "Request" | "Courtesy";
        media?: string;
        completionTime: string;
    }
}

function createProfilePicOfUserWhoMadeRequest(colour: IColour, name: string): React.ReactNode {
    //create a circular profile pic with the first letter of the name
    return (
        <View className={`relative border-2 border-black bg-${colour} w-12 h-12 rounded-full flex justify-center items-center`}>
            <Text className=' font-afaB text-sm text-white'>{name[0]}</Text>
            <View className='absolute left-8'>
                <Text className='font-afaB text-sm text-white'>☝</Text>
            </View>
        </View>
    )
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
            <Button text='😻' className='bg-gray-300' onPress={() => { }} textColor='text-black' />
        </View>
    )
}
const ActivityEvent = (props: ActivityEventProps) => {
    const { name } = props.user;
    const { summary, type, media, completionTime } = props.task;
    return (
        <Pod backgroundColor='white' variant={media ? 'pod-media-pod' : 'pod'} media={media} secondPodContent={getAfterText(completionTime + " ago", props.task.type)}>
            <View className='flex flex-row justify-between'>
                <View className='flex-1 flex flex-col gap-y-1 mr-[10%]'>
                    <Text className='font-afaB uppercase text-black'>{name}</Text>
                    <Text className='font-afa'>{summary}</Text>
                </View>
                {type == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : type == "Courtesy" ? <Image className='bg-indigo-500 w-5 h-5 object-contain' source={{ uri: './../../../assets/kindness.png' }}></Image> : createProfilePicOfUserWhoMadeRequest(props.userWhoMadeRequest!.profileBackgroundColour, props.userWhoMadeRequest!.name)}
            </View>
        </Pod >
    )
}

export default ActivityEvent