import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Screen } from '../ScreenFactory'
import Info from '../Ui/Info'
import Task from './Tasks/Task'
import Advertisement from './Tasks/Advertisement'
import { spacing } from '../../lib/constants'
import { UserAndCrewContext } from '../Context/Context'
import { ITask } from '../../lib/types'
import Pod from '../Ui/Pod'
import { PulseComponent } from '../Ui/animations'
import { getCrewTasks } from '../../app/backend/actions'
import { isBefore } from 'date-fns'
import PlaceholderTaskEvent from './Tasks/PlaceholderTaskEvent'
import PlaceholderPod from '../Ui/PlaceholderPod'

var equal = require('deep-equal')

const TasksScreen = () => {
    //crewID should be passed in as a prop, like a URL but for now it's hardcoded
    const context = useContext(UserAndCrewContext);
    const userID = context.user.id;
    const crewID = context.currentCrewID;
    const [tasks, setTasks] = useState({ myTasks: [] as ITask[], crewTasks: [] as ITask[] });

    useEffect(() => {
        async function main() {
            await getCrewTasks(crewID).then((tasks: ITask[] | null) => {
                if (!tasks) return null;
                tasks.sort((a, b) => {
                    return isBefore(a.assignedAt, b.assignedAt) ? 1 : -1
                })
                setTasks({
                    myTasks: tasks.filter((task) => {
                        return task.userID == userID;
                    }),
                    crewTasks: tasks.filter((task) => {
                        return task.userID != userID;
                    })
                })
            })
        }
        main()
    }, [])
    return (
        <Screen title='Tasks'>
            <Info backgroundColour='#4E9580' description="Thanks for completing your tasks - you're contributing to a cleaner and healthier area for all crew members!"></Info>
            <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>
                {
                    equal(tasks.myTasks, []) ?
                        <>
                            <PlaceholderPod _variant='pod-media' />
                            <PlaceholderPod _variant='pod-media' />
                        </>
                        : tasks.myTasks.map((task) => {
                            return <Task key={task.id} task={task} />
                        })
                }
            </View>
            {/* <Info backgroundColour='yellow' title='Reached peak performance!📈' description="Everyone in your crew has finished their tasks on time today. Keep it going!"></Info> */}
            <View className='flex flex-col' style={{ rowGap: spacing.gaps.groupedElement }}>
                {
                    equal(tasks.crewTasks, []) ?
                        <>
                            <PlaceholderPod _variant='pod-media' />
                            <PlaceholderPod _variant='pod-media' />
                        </>
                        : <>
                            <Text className='font-rubik text-xl'>Crew tasks</Text>
                            {
                                tasks.crewTasks.map((task) => {
                                    return <Task key={task.id} task={task} />
                                })}</>
                }
                {/* <Task task={{ summary: "Clear kitchen sink", type: "Request", promiseTime: "23:01", media: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" }} /> */}
                <Advertisement media="https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&" />
            </View>
        </Screen>
    )
}

export default TasksScreen