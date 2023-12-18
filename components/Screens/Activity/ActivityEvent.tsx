import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { IColour } from '../../../App';

type EventProps = {
    user: {
        name: string;
        profileBackgroundColour: IColour;
    },
    task: {
        eventSummary: string;
        taskType: "Rota" | "Request" | "Courtesy";
        media?: React.ReactNode;
    }
}
const Data = {
    user: {
        name: "Tye",
        profileBackgroundColour: "[#55A38C]"
    },
    task: {
        eventSummary: "Mopped & Swept the floor",
        taskType: "Request"
    }
}
const backgroundColour: IColour = Data.user.profileBackgroundColour as IColour;
function createProfilePic(profileBackgroundColour: IColour, name: string): React.ReactNode {
    //create a circular profile pic with the first letter of the name
    return (
        <View className={`relative border-2 border-black bg-${profileBackgroundColour} w-12 h-12 rounded-full flex justify-center items-center`}>
            <Text className=' font-afaB text-sm text-white'>{name[0]}</Text>
            <View className='absolute left-8'>

                <Text className='font-afaB text-sm text-white'>☝</Text>
            </View>
        </View>
    )
}
const ActivityEvent = (props: EventProps) => {
    const { name } = props.user;
    const { eventSummary, taskType, media } = props.task;
    return (
        <Pod className="" backgroundColor="white" variant={media ? 'pod-media-pod' : 'pod'} >
            <View className='flex flex-row justify-between'>
                <View className='flex-1 flex flex-col gap-y-1 mr-[10%]'>
                    <Text className='font-afaB uppercase text-black'>{name}</Text>
                    <Text className='font-afa'>{eventSummary}</Text>
                </View>
                {taskType == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : taskType == "Courtesy" ? <Image className='bg-indigo-500 w-5 h-5 object-contain' source={{ uri: '../../../assets/kindness.png' }}></Image> : createProfilePic(backgroundColour, Data.user.name)}
            </View>
        </Pod>
    )
}

export default ActivityEvent