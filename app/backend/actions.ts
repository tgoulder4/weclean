import { UserAndCrewContext } from "../../components/Context/Context";
import { IReaction } from "../../components/Screens/Activity/ReactionSet";
import { ITask, IUser, ICrew, IGoProPerk, ILevelUpPerk } from "../../lib/types"
import { users, crews, pricePerCrewMember, perks } from "./mockData";
var equal = require('deep-equal');

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export async function getTaskByID(crewID: string, taskID: string) {
    await sleep(1000);
    const crew = await getCrewInfo(crewID);
    if (crew === null) return null;
    const task = crew.tasks.find(task => task.id === taskID);
    if (task === undefined) return null;
    return task;
}
export async function getProfileBackgroundColour(userID: string): Promise<string> {
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
export async function getUsersInCrew(crewID: string, inPerspectiveOfUserID?: string): Promise<IUser[]> {
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
export async function getCrewInfo(crewID: string): Promise<ICrew | null> {
    await sleep(1000);
    const _crews = crews.find(crew => crew.id === crewID);
    if (_crews === undefined) return null;
    return _crews;
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
export async function getUserFromUserID(userID: string): Promise<IUser | null> {
    await sleep(1000);
    const user = users.find(user => user.id === userID);
    return user ? user : null;
}
export async function fetchCompletedTasksInRange(crewID: string, startIndex: number, endIndex: number) {
    await sleep(1000);
    const crew = crews.find(crew => crew.id === crewID);
    if (crew === undefined) {
        console.error("this crew ID is not in the database: " + crewID);
        return []
    };
    const completedTasks = crew.tasks.filter(task => {
        return task.markedAsCompletedAt !== null
    })
    console.log("completedTasks", completedTasks);
    return completedTasks;
}
export async function addReactionToTask(userID: string, crewID: string, taskID: string, _reaction: string): Promise<void> {
    const crew = await getCrewInfo(crewID);
    if (crew === null) return;

    const task = crew.tasks.find(task => task.id === taskID);
    if (task === undefined) {
        console.error("Task not found: the entered taskID doesn't correspond to any of this crew's tasks. (taskID " + taskID + ")");
        return;
    }

    let reaction = task.reactions.find(reaction => reaction.reaction === _reaction);
    if (reaction === undefined) {
        reaction = {
            id: Math.random().toString(36).substring(2, 15),
            reaction: _reaction,
            userIDs: [userID]
        };
        task.reactions.push(reaction);
    } else {
        reaction.userIDs.push(userID);
    }
}
export async function removeReactionFromTask(crewID: string, taskID: string, userID: string, reactionID: string): Promise<void> {
    const crew = await getCrewInfo(crewID);
    if (crew === null) return;
    //use reactionIndex to find the reaction, then remove the user from the userIDs array
    //if the userIDs array is empty after removing the user, remove the reaction from the reactions array
    const reactions = crew.tasks.find(task => task.id === taskID)?.reactions;
    if (reactions == undefined) {
        console.error("reactions is undefined: the entered taskID is doesn't correspond to any of this crew's tasks. (taskID " + taskID + ")");
        return;
    }
    const reaction = reactions.find(reaction => reaction.id === reactionID);
    if (reaction === undefined) {
        console.error("reaction is undefined: the entered reactionIndex is doesn't correspond to any of this task's reactions. (actions function removeReactionFromTask)");
        return;
    }
    const reactionIndex = reactions.findIndex(reaction => reaction.id === reactionID);
    if (reaction.userIDs.length === 1) {
        reactions.splice(reactionIndex, 1);
        return;
    } else {
        //remove the user from the userIDs array
        const userIndex = reaction.userIDs.findIndex(_userID => _userID === userID);
        if (userIndex === undefined) {
            console.error("userIndex is undefined: the entered userID is doesn't correspond to any of this reaction's users. (userID " + userID + ")");
            return;
        } else {
            reaction.userIDs.splice(userIndex, 1);
        }
    }

}
export async function getReactionsFromTask(crewID: string, taskID: string): Promise<IReaction[]> {
    const crew = await getCrewInfo(crewID);
    if (crew === null) {
        console.error("crew was null - couldn't return reactions from this");
        return [];
    };
    const task = crew.tasks.find(task => task.id === taskID);
    if (task === undefined) {
        console.error("task was undefined - couldn't return reactions from this");
        return [];
    };
    return task.reactions;
}
export async function getCrewTasks(crewID: string) {
    await sleep(1000);
    const crew = await getCrewInfo(crewID);
    if (crew === null) {
        console.error("crew was null - couldn't return tasks from this");
        return [];
    };
    return crew.tasks;
}