import { View, Text, } from 'react-native'
import React, { Component, FC, PropsWithChildren } from 'react'
type summaryProps = {
    className?: string
}
const Summary: FC = (props: summaryProps) => {
    const { className } = props;
    return (
        <>
            <View className={`flex flex-col ${className}`}>
                <Text className='mb-2 font-afa text-base'>Price per crew member</Text>
                <Text className='mb-2 font-afa text-base'>Crew total</Text>
                {selection == "Select members" || selection == "Everyone" ?
                    <Text className='mb-2 font-afa text-base'>Split across {selectedMembersChippingIn.length} members</Text> : <></>
                }
                <Text className='font-afaB text-base'>To pay</Text>
            </View>
            <View className='flex flex-col items-end'>
                <Text className='mb-2 font-afa text-end text-base'>£{pricePerCrewMember}/mo</Text>
                <Text className='mb-2 font-afa text-end text-base'>£{pricePerCrewMember * usersInThisCrew.usersInThisCrew.length}/mo</Text>
                {selection == "Select members" || selection == "Everyone" ?
                    <Text className='mb-2 font-afa text-end text-base'>a</Text> : <></>
                }
                <Text className='font-afaB text-end text-base'>£0.00/mo</Text>
            </View>
        </>
    )
}

export default Summary