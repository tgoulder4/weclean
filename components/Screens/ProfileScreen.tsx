import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Screen } from '../ScreenFactory'
import Pod from '../Ui/Pod'
import { spacing } from '../../lib/constants'
import Button from '../Ui/button'
import ProfilePic from '../User/ProfilePicFactory'
import DividedMenuItem from '../Settings/DividedMenuItem'
import CrewCard from './Profile/CrewCard'
import { getCrewInfo } from '../../lib/backend/actions'
import { ICrew } from '../../lib/types'
var equal = require('deep-equal')
const ProfileScreen = () => {
    const [crews, setCrews] = useState([{}] as ICrew[]);
    useEffect(() => {
        async function main() {
            const crew = await getCrewInfo("C1")
            if (crew) {
                setCrews([crew])
            } else {
                console.error("getCrewInfo returned null in profileScreen.tsx. (Does the crewID exist?)")
            }
        }

        main()
    }, [])
    const darkMode = false;
    return (
        <Screen title='Profile' largerTitle={true}>
            <Pod>
                <View style={{ columnGap: spacing.gaps.separateElement }} className='flex flex-row'>
                    {/* profile picture */}
                    <ProfilePic users={[{ name: "Tye", crewMemberSince: [''], profileBackgroundColour: "orange", crewID: [""], id: "", email: "", password: "", taskIDs: [""] as never, username: "" }]} />
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
                {
                    equal(crews, [{}]) ? <Text>Loading crew..</Text> : crews.map((crew) => {
                        return <CrewCard darkMode={darkMode} crew={crew} crewMemberSince='placeholder' />
                    })
                }
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