import { useRef, useEffect } from 'react';
import { View, Text, Animated, ViewStyle } from 'react-native';
import React from 'react';
import sleep from '../../../lib/sleep';
import * as Animatable from 'react-native-animatable';
import performHaptic from '../../../lib/performHaptic';
import { colours } from '../../../lib/constants';


const AnimatedStairs = () => {
    return (
        <View className='mr-[3px] h-40 flex-1 flex flex-row justify-end items-end gap-x-2'>
            <Animatable.View delay={0} animation={{ from: { height: 10 }, to: { height: 30 } }} style={{ width: 40, borderRadius: 8, backgroundColor: "#1D1D1D", height: 100 }} />
            <Animatable.View delay={300} animation={{ from: { height: 10 }, to: { height: 60 } }} style={{ width: 40, borderRadius: 8, backgroundColor: "#1D1D1D", height: 100 }} />
            <Animatable.View delay={600} animation={{ from: { height: 10 }, to: { height: 120 } }} style={{ width: 40, borderRadius: 8, backgroundColor: "#1D1D1D", height: 100 }} />
        </View>
    )
}

export default AnimatedStairs