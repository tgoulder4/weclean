import { View, Text, Image } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { IColour } from '../../../lib/types';
import { formatDistanceToNow } from "date-fns";
import Button from '../../Ui/button';
import images from '../../../lib/images';
import ProfilePic from '../../User/ProfilePicFactory';
import { brandName } from '../../../lib/constants';

export type AdvertisementProps = {
    media: string
}

const Advertisement = (props: AdvertisementProps) => {
    const { media } = props;
    return (
        <Pod backgroundColour="white" variant="pod-media" media={media}>
            <View className='flex flex-col'>
                <View className='flex flex-col'>
                    <Text className='font-afaB text-xl'>Advertisement</Text>
                    <Text className='font-afa text-base'>Ads help support {brandName}'s mission</Text>
                    <View className='flex flex-row justify-between items-end mt-1'>
                        <Button className='mt-2' type="medium" text='Hide' backgroundColour='[#55A38C]' textColor='white' onPress={() => { }} />
                    </View>
                </View>
            </View>
        </Pod >
    )
}

export default Advertisement