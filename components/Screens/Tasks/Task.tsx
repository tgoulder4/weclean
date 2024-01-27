import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import Pod from '../../Ui/Pod';
import { formatDistanceToNow } from "date-fns";
import Button from '../../Ui/button';
import images from '../../../lib/images';
import ProfilePic from '../../User/ProfilePicFactory';
import { ITask, IUser } from '../../../lib/types';
import { spacing } from '../../../lib/constants';
import { findDistance } from '../Activity/ActivityEvent';
import { UserAndCrewContext } from '../../Context/Context';

export type TaskProps = {
    usersWhoMadeRequest?: IUser[];
    task: ITask;
}
const Task = (props: TaskProps) => {
    const { summary, type, media, markedAsCompletedAt } = props.task;
    const { usersWhoMadeRequest } = props;
    const context = useContext(UserAndCrewContext);
    const userID = context.user.id;
    console.log("markedAsCompletedAt", markedAsCompletedAt)
    console.log("task:", props.task);
    function getTitle() {
        if (props.task.userID !== userID) {
            return props.task.name;
        }
        return markedAsCompletedAt ? findDistance(markedAsCompletedAt) : findDistance(props.task.assignedAt)
    }
    return (
        <Pod style={{ backgroundColor: 'white' }} variant={media ? 'pod-media' : 'pod'} media={media}>
            <View className='flex flex-col'>
                <View className='flex flex-col'>
                    {!props.task.markedAsCompletedAt ? <Image className='w-8 h-8' source={images['timer']}></Image> : <></>}
                    <Text className={`font-afaB ${!markedAsCompletedAt ? "text-xl" : "text-base"}`}>{getTitle().toUpperCase()}</Text>
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