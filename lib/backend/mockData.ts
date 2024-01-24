import { ICrew, IGoProPerk, ILevelUpPerk, ITask, IUser, IAction } from "../types";
export const brandName: string = "CleenCrew"
export const pricePerCrewMember: number = 3.49;
export const requests = [{
    id: "R1",
    status: "Completed",
    assignedAt: "2023-01-01 11:00:00",
    userIDWhoMadeTheRequest: "ABC123",
}]
export const crews: ICrew[] = [
    {
        id: "C1",
        profilePicture: "https://as2.ftcdn.net/v2/jpg/01/26/79/47/1000_F_126794739_t17jiRH9vsT6T9sbrgfWXF2O9E6esg9c.jpg",
        tasks: [
            {
                id: "T1",
                userID: "ABC123",
                name: "Mateusz",
                summary: "Cleaned kitchenA",
                type: "Request",
                media: "https://as2.ftcdn.net/v2/jpg/01/26/79/47/1000_F_126794739_t17jiRH9vsT6T9sbrgfWXF2O9E6esg9c.jpg",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T09:30:00Z",
                reactions: [{
                    id: "R7",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T09:00:00Z"
            },
            {
                id: "T2",
                userID: "DEF456",
                name: "Kate",
                summary: "Cleaned bathroom",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T10:15:00Z",
                reactions: [{
                    id: "R8",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T09:30:00Z"
            },
            {
                id: "T3",
                userID: "GHI789",
                name: "Tye",
                summary: "Mopped floors",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T11:45:00Z",
                reactions: [{
                    id: "R9",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T10:30:00Z"
            },
            {
                id: "T4",
                userID: "JKL012",
                name: "John",
                summary: "Dusted furniture",
                media: 'https://as1.ftcdn.net/v2/jpg/02/78/49/72/1000_F_278497210_GZEJISO40aKRImwGMtcXHVhJqG96CKRJ.jpg',
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T12:30:00Z",
                reactions: [{
                    id: "R10",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T11:00:00Z"
            },
            {
                id: "T5",
                userID: "MNO345",
                name: "Emma",
                summary: "Washed dishes",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T13:00:00Z",
                reactions: [{
                    id: "R11",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T12:00:00Z"
            }
        ],
        name: "Crew 1",
        members: ["ABC123", "DEF456"],
        isPro: true,
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
export const users: IUser[] = [
    {
        id: "ABC123",
        email: "a@b.com",
        username: "mateusz01",
        password: "123",
        crews: [
            {
                crewID: "C1",
                crewMemberSince: "2022-09-15T10:30:00Z",
                current: true
            },
            {
                crewID: "C2",
                crewMemberSince: "2022-09-15T10:30:00Z",
                current: false
            },
            {
                crewID: "C3",
                crewMemberSince: "2022-09-15T10:30:00Z",
                current: false
            }
        ],
        taskIDs: ["T1", "T2"],
        name: "Mateusz",
        icon: "👨‍💻",
        profileBackgroundColour: "indigo-500"
    },
    {
        id: "GHI789",
        username: "tye01",
        email: "c@d.com",
        password: "123",
        crews: [
            {
                crewID: "C1",
                crewMemberSince: "2022-08-20T09:45:00Z",
                current: false
            },
            {
                crewID: "C2",
                crewMemberSince: "2022-08-20T09:45:00Z",
                current: true
            },
            {
                crewID: "C3",
                crewMemberSince: "2022-08-20T09:45:00Z",
                current: false
            }
        ],
        checkCode: "9shavejdsayyatjt838d",
        name: "Tye",
        icon: "👨‍🔧",
        taskIDs: ["T1", "T2"],
        profileBackgroundColour: "[#55A38C]"
    },
    {
        id: "DEF456",
        username: "kate01",
        email: "e@f.com",
        password: "123",
        checkCode: "39fdhdj387x6sujhs",
        name: "Kate",
        icon: "👩‍🍳",
        taskIDs: ["T1", "T2"],
        profileBackgroundColour: "pink-500",
        crews: [
            {
                crewID: "C1",
                crewMemberSince: "2022-08-20T09:45:00Z",
                current: true
            },
            {
                crewID: "C2",
                crewMemberSince: "2022-08-20T09:45:00Z",
                current: false
            },
            {
                crewID: "C3",
                crewMemberSince: "2022-08-20T09:45:00Z",
                current: false
            }
        ]
    },
    {
        id: "JKL012",
        email: "g@h.com",
        username: "john01",
        password: "123",
        taskIDs: ["T3", "T4"],
        name: "John",
        icon: "👨‍💼",
        profileBackgroundColour: "blue-500",
        crews: [
            {
                crewID: "C1",
                crewMemberSince: "2022-07-10T14:20:00Z",
                current: false
            },
            {
                crewID: "C2",
                crewMemberSince: "2022-07-10T14:20:00Z",
                current: true
            },
            {
                crewID: "C3",
                crewMemberSince: "2022-07-10T14:20:00Z",
                current: false
            }
        ]
    },
    {
        id: "MNO345",
        username: "emma01",
        email: "i@j.com",
        password: "123",
        checkCode: "8d7fj3h4j5k6s7d8f",
        name: "Emma",
        icon: "👩‍💼",
        taskIDs: ["T3", "T4"],
        profileBackgroundColour: "purple-500",
        crews: [
            {
                crewID: "C1",
                crewMemberSince: "2022-06-05T16:50:00Z",
                current: false
            },
            {
                crewID: "C2",
                crewMemberSince: "2022-06-05T16:50:00Z",
                current: true
            },
            {
                crewID: "C3",
                crewMemberSince: "2022-06-05T16:50:00Z",
                current: false
            }
        ]
    },
    {
        id: "PQR678",
        username: "alex01",
        email: "k@l.com",
        password: "123",
        checkCode: "9s8d7f6g5h4j3k2l",
        name: "Alex",
        icon: "👨‍🔧",
        taskIDs: ["T5", "T6"],
        profileBackgroundColour: "green-500",
        crews: [
            {
                crewID: "C1",
                crewMemberSince: "2022-05-01T08:15:00Z",
                current: false
            },
            {
                crewID: "C2",
                crewMemberSince: "2022-05-01T08:15:00Z",
                current: false
            },
            {
                crewID: "C3",
                crewMemberSince: "2022-05-01T08:15:00Z",
                current: true
            }
        ]
    }
]
export const monthlyCompetition: IAction = {
    mainText: "Monthly Competition",
    description: "Win exciting prizes by participating in our monthly cleaning competitions!",
    ctaButtonText: "ENTER →",
    backgroundColour: "#310973",
    requiresPro: true,
}
export const activityActions: IAction[] = [{
    mainText: "Messy Housemates?",
    description: "We get it, it's a pain. Create a rota in seconds, boosting your crew's productivity.",
    ctaButtonText: "CREATE →",
    backgroundColour: "#1D1D1D",
    requiresPro: true,
},
{
    mainText: "Clean and Win",
    description: "Participate in cleaning challenges and get a chance to win exciting prizes!",
    ctaButtonText: "ENTER →",
    backgroundColour: '#310973',
    requiresPro: true,
},
{
    mainText: "Track Your Progress",
    description: "Monitor your cleaning progress and see how you're contributing to a cleaner environment.",
    ctaButtonText: "TRACK →",
    backgroundColour: '#0D3A5C', // Darker blue color
    requiresPro: false,
},
{
    mainText: "Organize Your Space",
    description: "Learn how to declutter and organize your living space for a more productive and peaceful environment.",
    ctaButtonText: "GET TIPS →",
    backgroundColour: '#A65F00', // Darker orange color
    requiresPro: false,
},
{
    mainText: "Green Cleaning",
    description: "Discover how our eco-friendly supplies reduce your environmental impact.",
    ctaButtonText: "EXPLORE →",
    backgroundColour: '#4F7E2B', // Darker green color
    requiresPro: false,
},
{
    mainText: "Cleaning Hacks",
    description: "Find clever cleaning hacks and shortcuts to make your cleaning tasks easier and more efficient.",
    ctaButtonText: "LEARN →",
    backgroundColour: '#8B2C0F', // Darker red color
    requiresPro: false,
},
{
    mainText: "Deep Cleaning Guide",
    description: "Get a step-by-step guide on how to deep clean your home and achieve a spotless living space.",
    ctaButtonText: "DOWNLOAD →",
    backgroundColour: '#5C145B', // Darker purple color
    requiresPro: true,
}]

