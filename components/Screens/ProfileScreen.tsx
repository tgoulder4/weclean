import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Pod from '../Ui/Pod'
import { spacing } from '../../lib/constants'
import Button from '../Ui/button'
import ProfilePic from '../User/ProfilePicFactory'
import DividedMenuItem from '../Settings/DividedMenuItem'
import CrewCard from './Profile/CrewCard'

const ProfileScreen = () => {
    return (
        <Screen title='Profile' largerTitle={true}>
            <Pod>
                <View style={{ columnGap: spacing.gaps.separateElement }} className='flex flex-row'>
                    {/* profile picture */}
                    <ProfilePic users={[{ name: "Tye", profileBackgroundColour: "orange", crewID: [""], id: "", email: "", password: "", taskIDs: [""] as never, username: "" }]} />
                    <View className='flex flex-col'>
                        {/* their name */}
                        <Text className='font-afaB text-base'>TYE
                        </Text>
                        <Text className='font-afa text-base'>Ranking: Rookie ★★
                        </Text>
                    </View>
                </View>
                <Button backgroundColour='#E6E6E6' type='selection'>
                    <Text className='font-afaB text-base'>Edit nickname or colour</Text>
                </Button>
            </Pod>
            <DividedMenuItem labelText='Crews'>
                {/* map their crews */}
                <CrewCard crewName='Crew 1' crewMemberSinceDate='1/1/2021' />
            </DividedMenuItem>
            <DividedMenuItem labelText='Crew Settings' options={
                [
                    {
                        optionText: 'Notifications',
                        action: () => { }
                    },
                    {
                        optionText: 'Requests',
                        action: () => { }
                    },
                ]
            } />
            <DividedMenuItem labelText='Legal' options={
                [
                    {
                        optionText: 'Terms of service',
                        action: () => { }
                    },
                    {
                        optionText: 'Privacy Policy',
                        action: () => { }
                    },
                ]
            } />

        </Screen>
    )
}

export default ProfileScreen