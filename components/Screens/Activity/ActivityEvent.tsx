import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import Button from '../../Ui/button';
import images from '../../../lib/images';
import ProfilePic from '../../User/ProfilePicFactory';
import { ITask, IUser } from '../../../lib/types';
import { colours, spacing } from '../../../lib/constants';
import { formatDistance, subDays } from 'date-fns';

export type ActivityEventProps = {
    event: ITask,
    name: string,
}

/**
 * 
 * @param date date in format YYYY-MM-DDTHH:MM:SSZ  from db
 * @returns 
 */
function findDistance(date: string): string {
    console.log("date is " + date)
    return formatDistance(new Date(date), new Date(), { addSuffix: true })
}
function getAfterText(props: { date: string, taskType: string }): React.ReactNode {
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
        <View className='flex flex-col justify-between items-start '>
            <Text className='font-afa text-base text-gray-700'>{findDistance(props.date)}, {getPrecedingText(props.taskType)}</Text>
            <View className='flex flex-row gap-x-2'>
                {/* //map reactions then */}
                <Button style={{ marginTop: spacing.gaps.groupedElement }} type="light" text='😻 1' backgroundColour={colours.light.input.background} customOnPress={() => { }} textColor='text-black' />
                <Button style={{ marginTop: spacing.gaps.groupedElement }} type="light" text='+' backgroundColour={colours.light.input.background} customOnPress={() => { }} textColor='text-black' />
            </View>
        </View>
    )
}
const ActivityEvent = (props: ActivityEventProps) => {
    const { name } = props;
    const { summary, type, media, markedAsCompletedAt } = props.event;
    if (!markedAsCompletedAt) return <></>;
    return (
        <Pod style={{ backgroundColor: 'white' }} variant={media ? 'pod-media-pod' : 'pod'} media={media} bottomPodContent={getAfterText({ date: markedAsCompletedAt, taskType: props.event.type })}>
            <View className='flex flex-col'>
                <View className=' flex flex-row justify-between'>
                    <View style={{ rowGap: spacing.gaps.groupedElement }} className='flex-1 flex flex-col'>
                        <Text className='font-afaB text-lg uppercase text-black'>{name}</Text>
                        <Text style={{ marginBottom: media ? 0 : spacing.gaps.groupedElement }} className='font-afa text-base'>{summary}</Text>
                    </View>
                    {type == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : type == "Courtesy" ? (images['kindness'] ? <Image className='w-12 h-12 object-contain' source={images['kindness']} /> : null) :
                        // <ProfilePic isRequest={true} users={usersWhoMadeRequest!} /> 
                        <></>
                    }
                </View>
                {!media ? <Text className='font-afa text-base text-gray-400'>{getAfterText({ date: markedAsCompletedAt, taskType: props.event.type })}</Text> : <></>}
            </View>
        </Pod >
    )
}

export default ActivityEvent