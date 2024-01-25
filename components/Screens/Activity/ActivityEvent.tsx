import { View, Text, Image } from 'react-native'
import React, { useEffect, useContext } from 'react'
import Pod from '../../Ui/Pod';
import Button from '../../Ui/button';
import images from '../../../lib/images';
import ProfilePic from '../../User/ProfilePicFactory';
import { ITask, IUser } from '../../../lib/types';
import { colours, spacing } from '../../../lib/constants';
import { formatDistance, subDays } from 'date-fns';
import ReactionSet from './ReactionSet';
import * as SecureStore from 'expo-secure-store';
import { UserAndCrewContext } from '../../Context/Context';

export type ActivityEventProps = {
    event: ITask,
    name: string,
}

/**
 * 
 * @param date date in format YYYY-MM-DDTHH:MM:SSZ  from db
 * @returns 
 */
export function findDistance(date: string): string {
    return formatDistance(new Date(date), new Date(), { addSuffix: true })
}
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

const ActivityEvent = (props: ActivityEventProps) => {
    const { name, event } = props;
    const { summary, type, media, markedAsCompletedAt, reactions } = props.event;
    // const userContext = useContext(UserAndCrewContext);
    // const userID = userContext.user.id;
    if (!markedAsCompletedAt) return <></>;
    return (
        <Pod style={{ backgroundColor: 'white' }} variant={media ? 'pod-media-pod' : 'pod'} media={media} bottomPodContent={
            <View className='flex flex-col'>
                <Text className='font-afa text-base text-gray-700'>{findDistance(markedAsCompletedAt)}, {getPrecedingText(type)}</Text>
                <ReactionSet taskID={event.id} _reactions={reactions} />
            </View>
        }>
            <View className='flex flex-col'>
                <View className=' flex flex-row justify-between'>
                    <View className='flex-1 flex flex-col'>
                        <Text className='font-afaB text-lg uppercase text-black'>{name}</Text>
                        <Text style={{ marginBottom: media ? 0 : spacing.gaps.groupedElement }} className='font-afa text-base'>{summary}</Text>
                    </View>
                    {type == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : type == "Courtesy" ? (images['kindness'] ? <Image className='w-12 h-12 object-contain' source={images['kindness']} /> : null) :
                        // <ProfilePic isRequest={true} users={usersWhoMadeRequest!} /> 
                        <></>
                    }
                </View>
                {!media ? <Text className='font-afa text-base text-gray-400'>
                    <View className='flex flex-col justify-between items-start '>
                        <Text style={{ marginTop: spacing.gaps.groupedElement }} className='font-afa text-base text-gray-700'>{findDistance(markedAsCompletedAt)}, {getPrecedingText(type)}</Text>
                        <ReactionSet taskID={event.id} _reactions={reactions} />
                    </View></Text> : <></>}
            </View>
        </Pod >
    )
}

export default ActivityEvent