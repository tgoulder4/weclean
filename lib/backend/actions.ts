export type ITask = {
    id: string,
    userID: string,
    summary: string,
    type: string,
    status: string,
    assignedAt: string | null,
    userIDWhoMadeTheRequest: string | null,
    completedAt: string
}
export type IUser = {
    id: string,
    crewID: string[],
    taskIDs: string[],
    name: string,
    profileBackgroundColour: string
}
export type ICrew = {
    id: string,
    name: string,
    taskIDs: string[],
    memberIDs: string[]
}
export const pricePerCrewMember: number = 2.49;
const requests = [{
    id: "R1",
    status: "Completed",
    assignedAt: "2023-01-01 11:00:00",
    userIDWhoMadeTheRequest: "ABC123",
}]
const tasks: ITask[] = [{
    id: "T1",
    userID: "GHI789",
    summary: "Mopped and swept the floor",
    type: "Request",
    requestID: "R1",
    completedAt: "2023-01-01 17:00:00"
}, {
    id: "T2",
    userID: "ABC123",
    summary: "Cleared the sink",
    type: "Courtesy",
    requestID: null,
    completedAt: "2023-01-01 17:00:00"
}];
const users: IUser[] = [{
    id: "ABC123",
    crewID: ["abc"],
    taskIDs: ["T1", "T2"],
    name: "Mateusz",
    profileBackgroundColour: "indigo-500"
},
{
    id: "GHI789",
    crewID: ["abc"],
    name: "Tye",
    taskIDs: ["T1", "T2"],
    profileBackgroundColour: "[#55A38C]"
},
{
    id: "DEF456",
    crewID: ["C1"],
    name: "Kate",
    taskIDs: ["T1", "T2"],
    profileBackgroundColour: "pink-500"
}]
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
export async function getUsersInCrew(crewID: string) {
    await sleep(1000);
    return users.filter(user => user.crewID.includes(crewID));
}
async function getTaskByID(taskID: string) {
    await sleep(1000);
    return tasks.find(task => task.id === taskID);
}
async function getLast24hrCrewTasks(crewID: string) {
    await sleep(1000);
    //compare time now to time stored and return if their difference isn't more than one day

}