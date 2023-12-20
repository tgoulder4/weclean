import { View, Text, Alert, Image } from 'react-native'
import React from 'react'
import { Screen } from '../ScreenFactory'
import Incentive from '../Ui/Incentive'
import Pod from '../Ui/Pod'
import LeaderboardEntry from './Leaderboard/LeaderboardEntry'


const LeaderboardScreen = () => {
    return (
        <Screen title="Leaderboard" subtitle="Cleanest crews ranked by crew score and popularity.">
            <Incentive legend="This month's competition:" shadow={true} backgroundColor="[#310973]" buttonColor='white' ctaButtonText='ENTER →' description="Submit a photo of your clean kitchen every day for a month for a chance to win!" mainText='Cleanest kitchen wins £1,000!' ctaAction={() => { }} />
            <Text className='font-rubik text-xl'>Top 10</Text>
            <LeaderboardEntry position={1} crew={{ name: "Chun Lee Baddies", photo: "https://cdn.discordapp.com/attachments/949458671115587687/1186479405845991424/image_3.png?ex=6593660e&is=6580f10e&hm=bd4d491f48830d2768615e3ae17c42eecca57a9ddbf35d7fd246afea99dc3e9f&", score: 2.9 }} />
        </Screen>
    )
}

export default LeaderboardScreen