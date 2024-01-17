import { IColour } from "../types"
import { ITask, IUser, ICrew, IGoProPerk, ILevelUpPerk } from "../types"
import { tasks, users, crews, pricePerCrewMember, perks } from "./mockData";

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

async function getTaskByID(taskID: string) {
    await sleep(1000);
    return tasks.find(task => task.id === taskID);
}
async function getLast24hrCrewTasks(crewID: string) {
    await sleep(1000);
    //compare time now to time stored and return if their difference isn't more than one day

}
export async function getProfileBackgroundColour(userID: string): Promise<IColour> {
    await sleep(1000);
    const result = users.find(user => user.id === userID)?.profileBackgroundColour;
    if (result === undefined) return "gray-500";
    return result;
}
/**
 * 
 * @param crewID 
 * @param inPerspectiveOfUserID The userID which will always show first in the list returned.
 * @returns 
 */
export async function getUsersInCrew(crewID: string, inPerspectiveOfUserID: string): Promise<IUser[]> {
    await sleep(1000);
    const result = crews.find(crew => crew.id === crewID)?.members;
    if (result === undefined) return [];

    const sortedMembers = result.sort((a, b) => {
        if (a.id === inPerspectiveOfUserID) return -1;
        if (b.id === inPerspectiveOfUserID) return 1;
        return 0;
    });

    return sortedMembers;
}
export async function getPricePerCrewMember(): Promise<number> {
    await sleep(1000);
    return pricePerCrewMember;
}

//i want to call this function then save it in an area accessible by all screens somehow.
export async function getPerks(): Promise<{ goProScreen: IGoProPerk[], levellingUpScreen: ILevelUpPerk[] }> {
    await sleep(1000);
    return perks;
}