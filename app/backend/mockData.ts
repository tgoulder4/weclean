import { ICrew, IGoProPerk, ILevelUpPerk, ITask, IUser, IAction } from "../../lib/types";
export const brandName: string = "CleenCrew"
export const pricePerCrewMember: number = 2.49;
export const requests = [{
    id: "R1",
    status: "Completed",
    assignedAt: "2023-01-01 11:00:00",
    userIDWhoMadeTheRequest: "ABC123",
}]
export const crews: ICrew[] = [
    {
        id: "C1",
        profilePicture: "https://example.com/profile-picture.jpg",
        tasks: [
            {
                id: "T3",
                userID: "XYZ567",
                name: "John",
                summary: "Mop the kitchen",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                media: "https://as2.ftcdn.net/v2/jpg/02/85/94/77/1000_F_285947711_GHkavTqOwnNSnQRiJxONcMNgA84KF11L.jpg",
                markedAsCompletedAt: "2024-01-23T12:30:00Z",
                reactions: [{
                    id: "R9",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T12:00:00Z"
            },
            {
                id: "T4",
                userID: "LMN789",
                name: "Emily",
                summary: "Clean the bathroom",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                media: "https://as1.ftcdn.net/v2/jpg/06/30/44/18/1000_F_630441827_5H2sGkUH9Sbb02eXcj6NQmFIcOrFvr4H.jpg",
                markedAsCompletedAt: "2024-01-23T13:15:00Z",
                reactions: [{
                    id: "R10",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T12:30:00Z"
            },
            {
                id: "T5",
                userID: "OPQ012",
                name: "Mike",
                summary: "Dust the bedroom",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T14:45:00Z",
                reactions: [{
                    id: "R11",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T13:30:00Z"
            }
        ],
        name: "Crew 1",
        members: ["XYZ567", "LMN789", "OPQ012"],
        isPro: true,
    },
    {
        id: "C2",
        profilePicture: "https://example.com/profile-picture.jpg",
        tasks: [
            {
                id: "T6",
                userID: "PQR678",
                name: "Alex",
                summary: "Vacuum living room",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T14:30:00Z",
                reactions: [{
                    id: "R12",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T14:00:00Z"
            },
            {
                id: "T7",
                userID: "STU901",
                name: "Sarah",
                summary: "Dust shelves",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T15:15:00Z",
                reactions: [{
                    id: "R13",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T14:30:00Z"
            },
            {
                id: "T8",
                userID: "VWX234",
                name: "Tom",
                summary: "Clean windows",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T16:45:00Z",
                reactions: [{
                    id: "R14",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T15:30:00Z"
            }
        ],
        name: "Crew 2",
        members: ["PQR678", "STU901", "VWX234"],
        isPro: false,
    },
    {
        id: "C3",
        profilePicture: "https://example.com/profile-picture.jpg",
        tasks: [
            {
                id: "T9",
                userID: "ZXC345",
                name: "Jessica",
                summary: "Sweep the hallway",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T17:30:00Z",
                reactions: [{
                    id: "R15",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T17:00:00Z"
            },
            {
                id: "T10",
                userID: "BNM678",
                name: "David",
                summary: "Wipe down surfaces",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T18:15:00Z",
                reactions: [{
                    id: "R16",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T17:30:00Z"
            },
            {
                id: "T11",
                userID: "QWE901",
                name: "Sophie",
                summary: "Vacuum the stairs",
                type: "Request",
                idOfUserWhoRequested: ["R1"],
                markedAsCompletedAt: "2024-01-23T19:45:00Z",
                reactions: [{
                    id: "R17",
                    reaction: "👍",
                    userIDs: ["ABC123", "DEF456"]
                }],
                assignedAt: "2024-01-23T18:30:00Z"
            }
        ],
        name: "Crew 3",
        members: ["ZXC345", "BNM678", "QWE901"],
        isPro: false,
    }
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
        profileBackgroundColour: "#4B5563"
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
                current: true
            },
            {
                crewID: "C2",
                crewMemberSince: "2022-08-20T09:45:00Z",
                current: false
            },
        ],
        checkCode: "9shavejdsayyatjt838d",
        name: "Tye",
        icon: "👨‍🔧",
        taskIDs: ["T1", "T2"],
        profileBackgroundColour: "#55A38C"
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
        profileBackgroundColour: "#F687B3",
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
        profileBackgroundColour: "#3B82F6",
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
        profileBackgroundColour: "#8B5CF6",
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
        profileBackgroundColour: "#48BB78",
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

