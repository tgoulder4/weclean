import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Screen } from '../ScreenFactory'
import Pod from '../Ui/Pod'
import { colours } from '../../lib/constants'
import SelectMembers from '../Ui/SelectMembers/SelectMembers'
import { userIDLoggedIn } from '../../lib/globals'
import { getUsersInCrew } from '../../lib/backend/actions'
import { IUser } from '../../lib/types'
const NewRequestScreen = () => {
    const [stage, setStage] = useState(0);
    const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
    const [usersInThisCrew, setUsersInThisCrew] = useState({ usersInThisCrew: [] as IUser[] });

    //this crew ID should be passed into screen as props, as if it were a URL.
    const thisCrewID = "C1";
    useEffect(() => {
        async function getUserCrewInfo() {
            await getUsersInCrew(thisCrewID, userIDLoggedIn).then((users) => {
                setUsersInThisCrew({ usersInThisCrew: users })
            });
        }
        getUserCrewInfo();
    }, [])
    return (
        <Screen title="New Request☝" largerTitle={true} subtitle="Send a cleaning request to any member of your Crew.">
            <Pod customBorder={stage == 0 ? { colour: colours.light.primary, width: 4 } : { colour: colours.light.secondary, width: 4 }}>
                <Text style={{ color: colours.light.textPrimary }} className='font-afaB text-base text-[13px]'>Who's it for?</Text>
                <SelectMembers maxMemers={1} setSelectedMembers={setSelectedMembers} alreadySelectedMembers={selectedMembers} _members={usersInThisCrew.usersInThisCrew} _viewingMode='edit' action='New request to' />
            </Pod>
        </Screen>
    )
}

export default NewRequestScreen