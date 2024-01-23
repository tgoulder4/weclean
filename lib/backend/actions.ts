import { IColour } from "../types"
import { ITask, IUser, ICrew, IGoProPerk, ILevelUpPerk } from "../types"
import { tasks, users, crews, pricePerCrewMember, perks } from "./mockData";
import { subHours } from 'date-fns';

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

async function getTaskByID(taskID: string) {
    await sleep(1000);
    return tasks.find(task => task.id === taskID);
}
export async function getLast24hrCrewTasks(crewID: string) {
    await sleep(1000);
    const currentDate = new Date();
    const twentyFourHoursAgo = subHours(currentDate, 24);
    const crewTasks: ITask[] = tasks.filter(task => task.crewID === crewID && new Date(task.assignedAt) > twentyFourHoursAgo);
    return crewTasks;
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
    const crew = crews.find(crew => crew.id === crewID);
    if (crew === undefined) return [];
    const usersInCrew: IUser[] = [];
    for (const userID of crew.members) {
        const user = users.find(user => user.id === userID);
        if (user === undefined) continue;
        if (user.id === inPerspectiveOfUserID) {
            usersInCrew.unshift(user);
        } else {
            usersInCrew.push(user);
        }
    }
    return usersInCrew;

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
//store in local storage
export async function getCrewInfo(crewID: string): Promise<ICrew | undefined> {
    await sleep(1000);
    return crews.find(crew => crew.id === crewID);
}
export async function checkLoginSuccessAndReturnUserObject(props: { username?: string, _password?: string, userID?: string, checkCode?: string }): Promise<IUser | boolean> {
    await sleep(1000);
    const result = users.find(user => user.username === props.username && user.password === props._password);
    if (result === undefined) return false;
    const { password, ...userWithoutPassword } = result;
    return userWithoutPassword as IUser;
}
export async function checkUnmodifiedLocalUser(userID: string, crewID: string): Promise<boolean> {
    await sleep(1000);
    const crew = crews.find(crew => crew.id === crewID);
    if (crew === undefined) return false;
    return crew.members.includes(userID);
}
export async function setUserCheckCode(userID: string): Promise<void> {
    await sleep(1000);
    const user = users.find(user => user.id === userID);
    if (user === undefined) return;

}
export async function getUserCheckCode(userID: string): Promise<string | undefined> {
    await sleep(1000);
    const user = users.find(user => user.id === userID);
    if (user === undefined) return;
    return user.checkCode;
}
export async function getTasksFromTaskIDs(taskIDs: string[]): Promise<ITask[]> {
    await sleep(1000);
    const tasksToReturn: ITask[] = [];
    for (const taskID of taskIDs) {
        const task = tasks.find(task => task.id === taskID);
        if (task === undefined) continue;
        tasksToReturn.push(task);
    }
    return tasksToReturn;
}