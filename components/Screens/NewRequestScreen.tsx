import { View, Text } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Screen } from '../ScreenFactory'
import Pod from '../Ui/Pod'
import { colours } from '../../lib/constants'
import SelectMembers from '../Ui/SelectMembers/SelectMembers'
import { getUsersInCrew } from '../../app/backend/actions'
import { IUser } from '../../lib/types'
import { UserAndCrewContext } from '../Context/Context'
const NewRequestScreen = () => {
    const [stage, setStage] = useState(0);
    const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
    const [usersInThisCrew, setUsersInThisCrew] = useState({ usersInThisCrew: [] as IUser[] });
    console.log("usersInThisCrew: ", usersInThisCrew)
    //this crew ID should be passed into screen as props, as if it were a URL.
    const context = useContext(UserAndCrewContext);
    const userIDLoggedIn = context.user.id;
    const thisCrewID = context.currentCrewID;
    useEffect(() => {
        async function getUserCrewInfo() {
            await getUsersInCrew(thisCrewID, userIDLoggedIn).then((users) => {
                console.log("users", users)
                setUsersInThisCrew({
                    usersInThisCrew: [{
                        id: "DEF456",
                        username: "kate01",
                        email: "e@f.com",
                        password: "123",
                        checkCode: "39fdhdj387x6sujhs",
                        name: "Kate",
                        icon: "👩‍🍳",
                        taskIDs: ["T1", "T2"],
                        profileBackgroundColour: "#F687B3",
                        crews: [
                            {
                                crewID: "C1",
                                crewMemberSince: "2022-08-20T09:45:00Z",
                                current: true
                            },
                            {
                                crewID: "C2",
                                crewMemberSince: "2022-08-20T09:45:00Z",
                                current: false
                            },
                            {
                                crewID: "C3",
                                crewMemberSince: "2022-08-20T09:45:00Z",
                                current: false
                            }
                        ]
                    },
                    {
                        id: "JKL012",
                        email: "g@h.com",
                        username: "john01",
                        password: "123",
                        taskIDs: ["T3", "T4"],
                        name: "John",
                        icon: "👨‍💼",
                        profileBackgroundColour: "#3B82F6",
                        crews: [
                            {
                                crewID: "C1",
                                crewMemberSince: "2022-07-10T14:20:00Z",
                                current: false
                            },
                            {
                                crewID: "C2",
                                crewMemberSince: "2022-07-10T14:20:00Z",
                                current: true
                            },
                            {
                                crewID: "C3",
                                crewMemberSince: "2022-07-10T14:20:00Z",
                                current: false
                            }
                        ]
                    },
                    {
                        id: "MNO345",
                        username: "emma01",
                        email: "i@j.com",
                        password: "123",
                        checkCode: "8d7fj3h4j5k6s7d8f",
                        name: "Emma",
                        icon: "👩‍💼",
                        taskIDs: ["T3", "T4"],
                        profileBackgroundColour: "#8B5CF6",
                        crews: [
                            {
                                crewID: "C1",
                                crewMemberSince: "2022-06-05T16:50:00Z",
                                current: false
                            },
                            {
                                crewID: "C2",
                                crewMemberSince: "2022-06-05T16:50:00Z",
                                current: true
                            },
                            {
                                crewID: "C3",
                                crewMemberSince: "2022-06-05T16:50:00Z",
                                current: false
                            }
                        ]
                    },
                    {
                        id: "PQR678",
                        username: "alex01",
                        email: "k@l.com",
                        password: "123",
                        checkCode: "9s8d7f6g5h4j3k2l",
                        name: "Alex",
                        icon: "👨‍🔧",
                        taskIDs: ["T5", "T6"],
                        profileBackgroundColour: "#48BB78",
                        crews: [
                            {
                                crewID: "C1",
                                crewMemberSince: "2022-05-01T08:15:00Z",
                                current: false
                            },
                            {
                                crewID: "C2",
                                crewMemberSince: "2022-05-01T08:15:00Z",
                                current: false
                            },
                            {
                                crewID: "C3",
                                crewMemberSince: "2022-05-01T08:15:00Z",
                                current: true
                            }
                        ]
                    }]
                })
            });
        }
        getUserCrewInfo();
    }, [])
    return (
        <Screen title="New Request☝" largerTitle={true} subtitle="Send a cleaning request to any member of your Crew.">
            <Pod customBorder={stage == 0 ? { colour: colours.light.primary, width: 4 } : { colour: colours.light.secondary, width: 4 }}>
                <Text style={{ color: colours.light.textPrimary }} className='font-afaB text-base text-[13px]'>Who's it for?</Text>
                <SelectMembers _members={usersInThisCrew.usersInThisCrew} hideSummary={true} maxMemers={1} setSelectedMembers={setSelectedMembers} alreadySelectedMembers={selectedMembers} _viewingMode='edit' action='New request to' />
            </Pod>
        </Screen>
    )
}

export default NewRequestScreen