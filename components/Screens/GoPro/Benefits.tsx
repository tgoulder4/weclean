import { View, Text } from 'react-native'
import React from 'react'
import Pod from '../../Ui/Pod';
import { colours } from '../../../lib/constants';
import ProPerk from './ProPerk';

const Benefits = () => {
    return (
        <Pod backgroundColour={colours.offBlack} noStroke={true} >
            <View className='flex flex-col'>
                <ProPerk perkIcon='🧼' perkTitle='Monthly Cleaning Supplies' perkText="Get cleaning supplies straight to your doorstep" />
                <ProPerk perkIcon='📅' perkTitle='Automated Rota' perkText="Create a rota in seconds, instantly putting your team into action" />
                <ProPerk perkIcon='💸' perkTitle='Entry into Pro-Only Competitions' perkText="Win exclusive cash prizes in competitions of cleanliness" />
                <ProPerk doesntHaveBottomDivide={true} perkIcon='👥' perkTitle="Join multiple crews" perkText="Join multiple Crews" />
            </View>
        </Pod>
    )
}

export default Benefits