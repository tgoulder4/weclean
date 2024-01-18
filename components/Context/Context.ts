import { createContext } from "react";
export const Context = createContext(
    {
        crew: "",//get crew info from crewid in user info from userid in asyncStorage
        user: "" //get user in asyncStorage.
    }
);