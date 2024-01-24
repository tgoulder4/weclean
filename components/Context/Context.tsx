import { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { ICrew, IUser } from "../../lib/types";
import { mode } from "../../lib/constants";
export const UserAndCrewContext = createContext(
    {
        crews: {} as {
            crewID: string;
            crewMemberSince: string;
        }[],//get crew info from crewid in user info from userid in asyncStorage
        currentCrewID: "",
        user: {} as IUser //get user in secureStore.
    }
);
const UserAndCrewContextProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [state, setState] = useState({
        user: {} as IUser,
        currentCrewID: "",
        crews: {} as {
            crewID: string;
            crewMemberSince: string;
            current: boolean;
        }[]
    })
    useEffect(() => {
        async function getInfo() {
            let userObj = {} as IUser;
            if (mode == "dev") {
                userObj = {
                    id: "GHI789",
                    username: "tye01",
                    email: "c@d.com",
                    password: "123",
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
                    ],
                    checkCode: "9shavejdsayyatjt838d",
                    name: "Tye",
                    icon: "👨‍🔧",
                    taskIDs: ["T1", "T2"],
                    profileBackgroundColour: "[#55A38C]"
                }
            } else {
                const user = await SecureStore.getItemAsync("user");
                if (!user) {
                    console.log("user not found in secure store")
                    return;
                }
                userObj = JSON.parse(user) as IUser;
            }

            const currentCrewID = userObj.crews.find(crew => crew.current)?.crewID;
            if (!currentCrewID) {
                console.error("No current crew was found, context cannot be set")
                return;
            }
            console.log("setting user and crew context to", userObj, currentCrewID)
            setState({
                user: userObj,
                currentCrewID,
                crews: userObj.crews
            })
        }
        getInfo()
    }, [])
    return (
        <UserAndCrewContext.Provider value={state}>
            {children}
        </UserAndCrewContext.Provider>
    )
}
export default UserAndCrewContextProvider;