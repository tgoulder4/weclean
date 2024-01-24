import { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { ICrew, IUser } from "../../lib/types";
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
            const user = await SecureStore.getItemAsync("user");
            if (!user) {
                console.log("user not found in secure store")
                return;
            }
            const userObj = JSON.parse(user) as IUser;
            const currentCrewID = userObj.crews.find(crew => crew.current)?.crewID;
            if (!currentCrewID) {
                console.error("No current crew was found, context cannot be set")
                return;
            }
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