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
const tasks: ITask[] = [{
    id: "T1",
    userID: "GHI789",
    summary: "Mopped and swept the floor",
    type: "Request",
    status: "Completed",
    assignedAt: "2023-01-01 11:00:00",
    userIDWhoMadeTheRequest: "ABC123",
    completedAt: "2023-01-01 17:00:00"
}, {
    id: "T2",
    userID: "ABC123",
    summary: "Cleared the sink",
    type: "Courtesy",
    status: "Completed",
    assignedAt: null,
    userIDWhoMadeTheRequest: null,
    completedAt: "2023-01-01 17:00:00"
}];
const users: IUser[] = [{
    id: "ABC123",
    crewID: ["C1"],
    taskIDs: ["T1", "T2"],
    name: "Mateusz",
    profileBackgroundColour: "indigo-500"
},
{
    id: "GHI789",
    crewID: ["C1"],
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
async function getUsersInCrew(crewID: string) {
    await sleep(1000);
    return users.filter(user => user.crewID.includes(crewID));
}
async function getTaskByID(taskID: string) {
    await sleep(1000);
    return tasks.find(task => task.id === taskID);
}
