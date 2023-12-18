import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';

type EventProps = {
    user: {
        name: string;
        profileBackgroundColour: string;
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
        profileBackgroundColour: "#55A38C"
    },
    task: {
        eventSummary: "Mopped & Swept the floor",
        taskType: "Request"
    }
}
function createProfilePic(profileBackgroundColour: string, name: string): React.ReactNode {
    //create a circular profile pic with the first letter of the name
    return (
        <View className={`bg-indigo-500 w-12 h-12 rounded-full flex justify-center items-center`}>
            <Text className='font-rubik text-2xl text-white'>{name[0]}</Text>
        </View>
    )
}
const ActivityEvent = (props: EventProps) => {
    const { name } = props.user;
    const { eventSummary, taskType, media } = props.task;
    return (
        <Pod backgroundColor="white" variant={media ? 'pod-media-pod' : 'pod'} >
            <View className=' flex flex-row justify-between'>
                <View className='bg-indigo-500 flex flex-col gap-y-1'>
                    <Text className='font-afaB uppercase text-black'>{name}</Text>
                    <Text className='font-afa'>{eventSummary}</Text>
                </View>
                {taskType == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : taskType == "Courtesy" ? <Image className='bg-indigo-500 w-5 h-5 object-contain' source={{ uri: '../../../assets/kindness.png' }}></Image> : createProfilePic(Data.user.profileBackgroundColour, Data.user.name)}
            </View>
        </Pod>
    )
}

export default ActivityEvent