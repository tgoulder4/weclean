import { View, Text } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod'
import { PulseComponent } from '../../Ui/animations'
import { colours } from '../../../lib/constants'
import tinycolor from 'tinycolor2'
import { spacing } from '../../../lib/constants'

const PlaceholderActivityEvent = () => {
    //generate a random number between 0 and 2
    const randomInt = Math.floor(Math.random() * 3);
    console.log("random int is " + randomInt)
    return (
        <Pod style={{ backgroundColor: 'white' }} variant={randomInt == 0 ? 'pod' : randomInt == 1 ? 'pod-media' : randomInt == 2 ? 'pod-media-pod' : undefined} media={
            <PulseComponent style={{ width: 100, height: 24 }} />
        } bottomPodContent={
            <PulseComponent style={{ width: 100, height: 24 }} />
        }>
            <View className='flex flex-col'>
                <View className=' flex flex-row justify-between'>
                    <View style={{ rowGap: spacing.gaps.groupedElement }} className='flex-1 flex flex-col'>
                        <PulseComponent style={{ width: 100, height: 24 }} />
                        <View style={{ marginBottom: randomInt == 1 || 2 ? 0 : spacing.gaps.groupedElement }} className='rounded-lg'></View>
                    </View>
                </View>
                {randomInt == 0 || 2 ?
                    <PulseComponent style={{ width: 250, height: 24 }} />
                    : <></>}
            </View>
        </Pod >
    )
}

export default PlaceholderActivityEvent