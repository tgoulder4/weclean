import { View, Text } from 'react-native'
import React from 'react'
import { colours, spacing } from '../../lib/constants'

const DividedMenuItem = (props: { children?: React.ReactNode, hasLabel?: boolean, labelText?: string, options?: { optionText: string, action: () => void }[] }) => {
    const { labelText, hasLabel, options, children } = props
    return (
        <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>
            {hasLabel || labelText ?
                <Text style={{ color: colours.light.textSecondary }} className='font-afaB'>{labelText}</Text> : <></>
            }
            {
                children ? children :
                    options?.map((option, index) => {
                        return (
                            <View key={index} className='flex flex-row justify-between'>
                                <Text className='font-afa'>{option.optionText}</Text>
                                <Text onPress={option.action} className='font-afa text-blue-500'></Text>
                            </View>
                        )
                    })
            }
        </View>
    )
}

export default DividedMenuItem