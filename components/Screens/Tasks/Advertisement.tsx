import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { IColour } from '../../../App';
import { formatDistanceToNow } from "date-fns";
import Button from '../../Ui/button';
import images from '../../../lib/images';
import ProfilePic, { User } from '../../User/ProfilePicFactory';
import { brandName } from '../../../lib/constants';

export type AdvertisementProps = {
    media: string
}
function getOlderTasks() { }
const Advertisement = (props: AdvertisementProps) => {
    const { media } = props;
    return (
        <Pod backgroundColour="white" variant="pod-media" media={media}>
            <View className='flex flex-col'>
                <View className='flex flex-col'>
                    <Text className='font-afaB text-xl'>Advertisement</Text>
                    <Text className='font-afa'>Ads help support {brandName}'s mission</Text>
                    <View className='flex flex-row justify-between items-end mt-1'>
                        <Button hasTopMargin={true} type="medium" text='Hide' backgroundColour='[#55A38C]' textColor='white' onPress={() => { }} />
                    </View>
                </View>
            </View>
        </Pod >
    )
}

export default Advertisement