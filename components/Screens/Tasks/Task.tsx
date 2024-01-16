import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { formatDistanceToNow } from "date-fns";
import Button from '../../Ui/button';
import images from '../../../lib/images';
import ProfilePic from '../../User/ProfilePicFactory';
import { IUser } from '../../../lib/types';
import { spacing } from '../../../lib/constants';

export type TaskProps = {
    usersWhoMadeRequest?: IUser[];
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
    const { usersWhoMadeRequest } = props;
    return (
        <Pod style={{ backgroundColor: 'white' }} variant={media ? 'pod-media' : 'pod'} media={media}>
            <View className='flex flex-col'>
                <View className='flex flex-col'>
                    {!props.task.completionTime ? <Image className='w-8 h-8' source={images['timer']}></Image> : <></>}
                    <Text className='font-afaB text-xl'>{props.task.completionTime ? formatDistanceToNow(new Date(props.task.completionTime)) + " ago" : props.task.promiseTime}</Text>
                    <Text className='font-afa text-base'>{props.task.summary}</Text>
                    <View className='flex flex-row justify-between items-end mt-1'>
                        <Button style={{ marginTop: spacing.gaps.groupedElement }} type="medium" text='Mark as done' backgroundColour='#55A38C' textColor='white' customOnPress={() => { }} />
                        {!usersWhoMadeRequest ? <Text className=' font-afa text-gray-400'>📅</Text> : <ProfilePic users={usersWhoMadeRequest} />}
                    </View>
                </View>
            </View>
        </Pod >
    )
}

export default Task