import { View, Text } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { PulseComponent } from '../../Ui/animations'
import { spacing } from '../../../lib/constants';

const PlaceholderTaskEvent = () => {
    return (
        <Pod style={{ backgroundColor: 'white' }} variant='pod-media' media={
            <PulseComponent style={{ width: 100, height: 24 }} />
        } bottomPodContent={
            <PulseComponent style={{ width: 100, height: 24 }} />
        }>
            <View className='flex flex-col'>
                <View className=' flex flex-row justify-between'>
                    <View style={{ rowGap: spacing.gaps.groupedElement }} className='flex-1 flex flex-col'>
                        <PulseComponent style={{ width: 100, height: 24 }} />
                        <View className='rounded-lg'></View>
                    </View>
                </View>
                <PulseComponent style={{ width: 250, height: 24 }} />
            </View>
        </Pod >
    )
}

export default PlaceholderTaskEvent