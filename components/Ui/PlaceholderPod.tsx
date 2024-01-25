import { View, Text } from 'react-native'
import React from 'react'
import Pod from './Pod'
import { PulseComponent } from './animations'
import { colours, spacing } from '../../lib/constants'



const PlaceholderPod = (props: { _variant?: string }) => {
    const { _variant } = props;
    const randomInt = Math.floor(Math.random() * 3);
    return (
        <Pod style={{ backgroundColor: 'white' }} variant={_variant || randomInt == 0 ? 'pod' : randomInt == 1 ? 'pod-media' : randomInt == 2 ? 'pod-media-pod' : undefined} media={
            <PulseComponent style={{ width: 100, height: 24 }} />
        } bottomPodContent={
            <PulseComponent style={{ width: 100, height: 24 }} />
        }>
            <View className='flex flex-col'>
                <View className=' flex flex-row justify-between'>
                    <View style={{ rowGap: spacing.gaps.groupedElement }} className='flex-1 flex flex-col'>
                        <PulseComponent style={{ width: 100, height: 24 }} />
                        <View style={{ marginBottom: (_variant == "pod-media" || _variant == "pod-media-pod") || (randomInt == 1 || 2) ? 0 : spacing.gaps.groupedElement }} className='rounded-lg'></View>
                    </View>
                </View>
                {(_variant == "pod-media" || _variant == "pod-media-pod") || (randomInt == 0 || 2) ?
                    <PulseComponent style={{ width: 250, height: 24 }} />
                    : <></>}
            </View>
        </Pod >
    )
}

export default PlaceholderPod