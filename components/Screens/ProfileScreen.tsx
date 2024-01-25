import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Screen } from '../ScreenFactory'
import Pod from '../Ui/Pod'
import { spacing } from '../../lib/constants'
import Button from '../Ui/button'
import ProfilePic from '../User/ProfilePicFactory'
import DividedMenuItem from '../Settings/DividedMenuItem'
import CrewCard from './Profile/CrewCard'
import { getCrewInfo } from '../../lib/backend/actions'
import { ICrew } from '../../lib/types'
import { UserAndCrewContext } from '../Context/Context'
var equal = require('deep-equal')
type ICrewCardProps = {
    crew: ICrew,
    crewMemberSince: string,
    isPro: boolean,
    name: string,
    profilePicture: string,
}
const ProfileScreen = () => {
    const crewAndUserContext = useContext(UserAndCrewContext);
    const contextCrewIDsAndMemberSinces = crewAndUserContext.crews;
    const [crews, setCrews] = useState<ICrewCardProps[] | null>([{
    } as ICrewCardProps]);
    async function turnCrewIDAndMemberSinceIntoICrewCardProps(crewIDAndMemberSince: { crewID: string, crewMemberSince: string }) {
        const crew = await getCrewInfo(crewIDAndMemberSince.crewID);
        if (!crew) {
            throw new Error("Crew not found. The crew ID was " + crewIDAndMemberSince.crewID);
        }
        const ICrewCardProp: ICrewCardProps = {
            crew: crew,
            crewMemberSince: crewIDAndMemberSince.crewMemberSince,
            isPro: false,
            name: crew.name,
            profilePicture: crew.profilePicture,
        }
        return ICrewCardProp;
    }

    useEffect(() => {
        async function getCrews() {
            const crewPromises = contextCrewIDsAndMemberSinces.map(crewIDAndMemberSince => {
                return turnCrewIDAndMemberSinceIntoICrewCardProps(crewIDAndMemberSince);
            });
            try {
                const crewCards = await Promise.all(crewPromises);
                console.log("setting crews to: ", crewCards);
                setCrews(crewCards);
            } catch (error) {
                console.error("Error occurred while fetching crews:", error);
            }
        }
        getCrews();
    }, [])
    return (
        <Screen title='Profile' largerTitle={true}>
            <Pod>
                <View style={{ columnGap: spacing.gaps.separateElement }} className='flex flex-row'>
                    {/* profile picture */}
                    <ProfilePic users={[{
                        name: "Tye", profileBackgroundColour: "orange", icon: "", crews: [{
                            crewID: "", crewMemberSince: "", current: false
                        }], id: "", email: "", password: "", taskIDs: [""] as never, username: ""
                    }]} />
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
                    equal(crews, [{} as ICrewCardProps]) ? <Text>Loading crew..</Text> : crews == null ? <Text>Couldn't load crewCard.</Text> : crews.map((crew) => {
                        return <CrewCard key={crew.crew.id} isPro={crew.isPro} name={crew.name} profilePicture={crew.profilePicture} hasChevron={true} crewMemberSince={crew.crewMemberSince} />
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