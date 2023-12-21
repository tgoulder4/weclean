import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { IColour } from '../../../App';
import { formatDistanceToNow } from "date-fns";
import Button from '../../Ui/button';
import images from '../../../lib/images';

export type TaskProps = {
    userWhoMadeRequest?: {
        name: string;
        profileBackgroundColour: IColour;
    }
    task: {
        summary: string;
        type: "Rota" | "Request";
        media?: string;
        promiseTime: string;
        completionTime?: string;
    }
}
function getOlderTasks() { }
const Task = (props: TaskProps) => {
    const { summary, type, media, completionTime } = props.task;
    return (
        <Pod backgroundColour="white" variant={media ? 'pod-media' : 'pod'} media={media}>
            <View className='flex flex-col'>
                <View className='flex flex-col'>
                    {!props.task.completionTime ? <Image className='w-8 h-8' source={images['timer']}></Image> : <></>}
                    <Text className='font-afaB text-xl'>{props.task.completionTime ? formatDistanceToNow(new Date(props.task.completionTime)) + " ago" : props.task.promiseTime}</Text>
                    <Text className='font-afa'>{props.task.summary}</Text>
                    <View className='flex flex-row justify-between mt-2'>
                        <Button text='Mark as done' backgroundColour='[#55A38C]' textColor='white' onPress={() => { }} />
                    </View>
                </View>
            </View>
        </Pod >
    )
}

export default Task