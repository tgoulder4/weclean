import { ICrew, IGoProPerk, ILevelUpPerk, ITask, IUser } from "../types";
export const brandName: string = "CleenCrew"
export const pricePerCrewMember: number = 3.49;
export const requests = [{
    id: "R1",
    status: "Completed",
    assignedAt: "2023-01-01 11:00:00",
    userIDWhoMadeTheRequest: "ABC123",
}]
export const tasks: ITask[] = [
    {
        //composite key
        id: "T1",
        userID: "GHI789",
        crewID: "C1",
        summary: "Mopped and swept the floor",
        type: "Request",
        requestID: "R1",
        status: "open",
        markedAsCompletedAt: "2023-16-04 11:00:00",
        reactions: [{
            reaction: "👍",
            userIDs: ["ABC123", "DEF456"]
        }],
        assignedAt: "2023-16-04 11:00:00"
    },
    {
        id: "T2",
        userID: "GHI789",
        crewID: "C1",
        summary: "Mopped and swept the floor",
        type: "Request",
        requestID: "R1",
        status: "open",
        markedAsCompletedAt: "2023-16-04 11:00:00",
        reactions: [{
            reaction: "😻",
            userIDs: ["ABC123", "DEF456"]
        }],
        assignedAt: "2023-16-04 11:00:00"
    },
];
export const crews: ICrew[] = [
    {
        id: "C1",
        name: "The A Team",
        isPro: false,
        taskIDs: ["T1", "T2"],
        members: ["ABC123", "GHI789", "DEF456", "JKL012"],
    },
    {
        id: "C2",
        name: "The B Team",
        isPro: false,
        taskIDs: ["T3", "T4"],
        members: ["VWX234", "YZA567", "BCD890"],
    },
    {
        id: "C3",
        name: "The C Team",
        isPro: false,
        taskIDs: ["T5", "T6"],
        members: ["EFG123", "HIJ456", "KLM789"],
    },
    {
        id: "C4",
        name: "The D Team",
        isPro: false,
        taskIDs: ["T7", "T8"],
        members: ["NOP012", "QRS345", "TUV678"],
    },
];
export const perks: { goProScreen: IGoProPerk[], levellingUpScreen: ILevelUpPerk[] } = {
    goProScreen: [{
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
    ], levellingUpScreen: [{
        description: "Clean spaces & happy faces",
        tickedForFree: true,
        tickedForPro: true,
    },
    {
        description: "Basically-Free cleaning supplies",
        tickedForFree: false,
        tickedForPro: true,
    },
    {
        description: "Automated rota",
        tickedForFree: false,
        tickedForPro: true,
    },
    {
        description: "Entry into pro-only competitions",
        tickedForFree: false,
        tickedForPro: true,
    },
    {
        description: "Join multiple crews",
        tickedForFree: false,
        tickedForPro: true,
    },
    {
        description: "Support " + brandName + "'s mission",
        tickedForFree: false,
        tickedForPro: true,
    },
    ]
}
export const users: IUser[] = [{
    id: "ABC123",
    email: "a@b.com",
    username: "mateusz01",
    password: "123",
    crewID: ["abc"],
    taskIDs: ["T1", "T2"],
    name: "Mateusz",
    profileBackgroundColour: "indigo-500"
},
{
    id: "GHI789",
    username: "tye01",
    email: "c@d.com",
    password: "123",
    crewID: ["abc"],
    name: "Tye",
    taskIDs: ["T1", "T2"],
    profileBackgroundColour: "[#55A38C]"
},
{
    id: "DEF456",
    crewID: ["C1"],
    username: "kate01",
    email: "e@f.com",
    password: "123",
    name: "Kate",
    taskIDs: ["T1", "T2"],
    profileBackgroundColour: "pink-500"
}]