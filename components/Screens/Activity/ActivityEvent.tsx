import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import Button from '../../Ui/button';
import images from '../../../lib/images';
import ProfilePic from '../../User/ProfilePicFactory';
import { IUser } from '../../../lib/types';
import { colours, spacing } from '../../../lib/constants';

export type ActivityEventProps = {
    user: {
        name: string;
    },
    usersWhoMadeRequest?: IUser[];
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
        <View className='flex flex-col justify-between items-start '>
            <Text className='font-afa text-base text-gray-700'>{dateAgo}, {getPrecedingText(taskType)}</Text>
            <View className='flex flex-row gap-x-2'>
                {/* //map reactions then */}
                <Button style={{ marginTop: spacing.gaps.groupedElement }} type="light" text='😻 1' backgroundColour={colours.light.input.background} customOnPress={() => { }} textColor='text-black' />
                <Button style={{ marginTop: spacing.gaps.groupedElement }} type="light" text='+' backgroundColour={colours.light.input.background} customOnPress={() => { }} textColor='text-black' />
            </View>
        </View>
    )
}
const ActivityEvent = (props: ActivityEventProps) => {
    const { name } = props.user;
    const { usersWhoMadeRequest } = props;
    const { summary, type, media, completionTime } = props.task;
    return (
        <Pod style={{ backgroundColor: 'white' }} variant={media ? 'pod-media-pod' : 'pod'} media={media} bottomPodContent={getAfterText(completionTime + " ago", props.task.type)}>
            <View className='flex flex-col'>
                <View className=' flex flex-row justify-between'>
                    <View style={{ rowGap: spacing.gaps.groupedElement }} className='flex-1 flex flex-col'>
                        <Text className='font-afaB text-lg uppercase text-black'>{name}</Text>
                        <Text style={{ marginBottom: media ? 0 : spacing.gaps.groupedElement }} className='font-afa text-base'>{summary}</Text>
                    </View>
                    {type == "Rota" ? <Text className='bg-indigo-500 font-bold'>📅</Text> : type == "Courtesy" ? (images['kindness'] ? <Image className='w-12 h-12 object-contain' source={images['kindness']} /> : null) : <ProfilePic isRequest={true} users={usersWhoMadeRequest!} />}
                </View>
                {!media ? <Text className='font-afa text-base text-gray-400'>{getAfterText(completionTime + " ago", props.task.type)}</Text> : <></>}
            </View>
        </Pod >
    )
}

export default ActivityEvent