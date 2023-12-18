import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { IColour } from '../../../App';

export type ActivityEventProps = {
    user: {
        name: string;
    },
    userWhoMadeRequest?: {
        name: string;
        profileBackgroundColour: IColour;
    }
    task: {
        eventSummary: string;
        taskType: "Rota" | "Request" | "Courtesy";
        media?: Image;
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
const ActivityEvent = (props: ActivityEventProps) => {
    const { name } = props.user;
    const { eventSummary, taskType, media } = props.task;
    return (
        <Pod className="" backgroundColor="white" variant={media ? 'pod-media-pod' : 'pod'} >
            <View className='flex flex-row justify-between'>
                <View className='flex-1 flex flex-col gap-y-1 mr-[10%]'>
                    <Text className='font-afaB uppercase text-black'>{name}</Text>
                    <Text className='font-afa'>{eventSummary}</Text>
                </View>
                {taskType == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : taskType == "Courtesy" ? <Image className='bg-indigo-500 w-5 h-5 object-contain' source={{ uri: '../../../assets/kindness.png' }}></Image> : createProfilePicOfUserWhoMadeRequest(props.userWhoMadeRequest!.profileBackgroundColour, props.userWhoMadeRequest!.name)}
            </View>
        </Pod>
    )
}

export default ActivityEvent