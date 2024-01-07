import { IColour } from "../types"
import { ITask, IUser, ICrew, IPerk } from "../types"
export const brandName: string = "CleenCrew"
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
const crews: ICrew[] = [
    {
        id: "C1",
        name: "The A Team",
        taskIDs: ["T1", "T2"],
        members: [
            {
                id: "ABC123",
                crewID: ["C1"],
                taskIDs: ["T1", "T2"],
                name: "Mateusz",
                profileBackgroundColour: "indigo-500",
            },
            {
                id: "GHI789",
                crewID: ["abc"],
                name: "Tye",
                taskIDs: ["T1", "T2"],
                profileBackgroundColour: "[#55A38C]",
            },
            {
                id: "DEF456",
                crewID: ["C1"],
                name: "Kate",
                taskIDs: ["T1", "T2"],
                profileBackgroundColour: "pink-500",
            },
            {
                id: "JKL012",
                crewID: ["C1"],
                name: "John",
                taskIDs: ["T1", "T2"],
                profileBackgroundColour: "blue-500",
            },
            {
                id: "MNO345",
                crewID: ["C1"],
                name: "Sarah",
                taskIDs: ["T1", "T2"],
                profileBackgroundColour: "red-500",
            },
            {
                id: "PQR678",
                crewID: ["C1"],
                name: "Alex",
                taskIDs: ["T1", "T2"],
                profileBackgroundColour: "green-500",
            },
            {
                id: "STU901",
                crewID: ["C1"],
                name: "Emily",
                taskIDs: ["T1", "T2"],
                profileBackgroundColour: "yellow-500",
            },
        ],
    },
    {
        id: "C2",
        name: "The B Team",
        taskIDs: ["T3", "T4"],
        members: [
            {
                id: "VWX234",
                crewID: ["C2"],
                name: "Mike",
                taskIDs: ["T3", "T4"],
                profileBackgroundColour: "[#55A38C]",
            },
            {
                id: "YZA567",
                crewID: ["C2"],
                name: "Lisa",
                taskIDs: ["T3", "T4"],
                profileBackgroundColour: "blue-500",
            },
            {
                id: "BCD890",
                crewID: ["C2"],
                name: "Chris",
                taskIDs: ["T3", "T4"],
                profileBackgroundColour: "blue-500",
            },
        ],
    },
    {
        id: "C3",
        name: "The C Team",
        taskIDs: ["T5", "T6"],
        members: [
            {
                id: "EFG123",
                crewID: ["C3"],
                name: "Jessica",
                taskIDs: ["T5", "T6"],
                profileBackgroundColour: "indigo-500",
            },
            {
                id: "HIJ456",
                crewID: ["C3"],
                name: "Ryan",
                taskIDs: ["T5", "T6"],
                profileBackgroundColour: "green-500",
            },
            {
                id: "KLM789",
                crewID: ["C3"],
                name: "Sophia",
                taskIDs: ["T5", "T6"],
                profileBackgroundColour: "pink-500",
            },
        ],
    },
    {
        id: "C4",
        name: "The D Team",
        taskIDs: ["T7", "T8"],
        members: [
            {
                id: "NOP012",
                crewID: ["C4"],
                name: "David",
                taskIDs: ["T7", "T8"],
                profileBackgroundColour: "indigo-500",
            },
            {
                id: "QRS345",
                crewID: ["C4"],
                name: "Emma",
                taskIDs: ["T7", "T8"],
                profileBackgroundColour: "pink-500",
            },
            {
                id: "TUV678",
                crewID: ["C4"],
                name: "Michael",
                taskIDs: ["T7", "T8"],
                profileBackgroundColour: "blue-500",
            },
        ],
    },
];


const perks: IPerk[] = [{
    icon: "🧼",
    title: "Monthly Cleaning Supplies",
    description: "Get cleaning supplies straight to your doorstep",
    badge: "Soon"
}, {
    icon: "📅",
    title: "Automated Rota",
    description: "Create a rota in seconds, instantly putting your team into action"
}, {
    icon: "💸",
    title: "Entry into pro-only competitions",
    description: "Win exclusive cash prizes in competitions of cleanliness"
}, {
    icon: "👥",
    title: "Join multiple crews",
    description: "Now you can help out your friends and families spaces too"
},
{
    icon: "🚀",
    title: "Support " + brandName + "'s mission",
    description: "Help turn shared living spaces clean and tidy, one crew at a time"
},
]
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
    return result;
}
export async function getPricePerCrewMember(): Promise<number> {
    await sleep(1000);
    return pricePerCrewMember;
}
export async function getPerks(): Promise<IPerk[]> {
    await sleep(1000);
    return perks;
}