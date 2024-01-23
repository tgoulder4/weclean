export type IColour = "black" | "white" | "yellow-500" | "green-500" | "blue-500" | "indigo-500" | "pink-500" | "red-500" | "gray-500" | "slate-900" | "gray-200" | "[#55A38C]" | "[#4E9580]/10" | "white/50" | "[#310973]" | "[#1D1D1D]" | "transparent" | "gray-200/50" | "[#3171EF]/30" | "[#DDEDEE]";
export type RootStackParamList = {
    Activity: { crewId: string };
    Profile: { userId: string };
    NewRequest: { crewId: string, userId: string };
    GoPro: { andText: string };
    Leaderboard: { myCrewId: string };
};
export type IAction = {
    mainText: string,
    description: string,
    ctaButtonText: string,
    backgroundColour: string,
    requiresPro?: boolean
}
export type ITask = {
    id: string,
    userID: string,
    summary: string,
    assignedAt: string,
    idOfUserWhoRequested: string[] | null,
    type: "Request" | "Rota" | "Courtesy",
    media?: string,
    reactions: {
        reaction: string,
        userIDs: string[]
    }[],
    markedAsCompletedAt: string | null //only the user who requested the task can change the status to completed
}
export type IRequest = {
    id: string,
    status: string,
    assignedAt: string,
    userIDWhoMadeTheRequest: string,
    taskID: string
}
export type IUser = {
    id: string,
    username: string,
    email: string,
    password: string,
    crewID: string[],
    taskIDs: string[],
    name: string,
    checkCode?: string,
    profileBackgroundColour: string
}
export type ICrew = {
    id: string,
    name: string,
    tasks: ITask[],
    members: string[],
    isPro: boolean,
}
export type IGoProPerk = {
    icon: string,
    title: string,
    description: string
    badge?: string
}
export type ILevelUpPerk = {
    description: string,
    tickedForFree: boolean,
    tickedForPro: boolean
}