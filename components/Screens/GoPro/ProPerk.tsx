import { View, Text } from 'react-native'
import React from 'react'

const ProPerk = (props: { perkIcon: string, perkTitle: string, perkText: string, doesntHaveBottomDivide?: boolean, badge?: string }) => {
    return (<>
        <View className={`flex-1 flex flex-row gap-x-4 pl-2 ${props.doesntHaveBottomDivide ? "" : "mb-[20px]"}`}>
            <Text className='font-afa text-white'>{props.perkIcon}</Text>
            <View className='flex-1 flex flex-col gap-y-1'>
                <Text className='font-afaB text-base text-white'>{props.perkTitle}</Text>
                <Text className='font-afa text-base text-white flex-1'>{props.perkText}</Text>
            </View>
        </View>
        {
            !props.doesntHaveBottomDivide &&
            <View className='pl-[32px]'>
                <View className='h-px w-full bg-white/10 mb-[20px]' />
            </View>
        }
    </>
    )
}

export default ProPerk