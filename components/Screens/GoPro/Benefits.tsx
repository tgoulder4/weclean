import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pod from '../../Ui/Pod';
import { colours } from '../../../lib/constants';
import ProPerk from './ProPerk';
import { IPerk, getPerks } from '../../../lib/backend/actions';

const Benefits = () => {
    const [perks, setPerks] = useState([] as IPerk[]);
    useEffect(() => {
        async function main() {
            const perks = await getPerks();
            setPerks(perks);
        }
        main();
    })
    return (
        <Pod backgroundColour={colours.offBlack} noStroke={true} >
            <View className='flex flex-col'>
                {
                    perks.map((perk, index) => <ProPerk doesntHaveBottomDivide={index == perks.length - 1} key={index} perkIcon={perk.icon} perkTitle={perk.title} perkText={perk.description} />)
                }
            </View>
        </Pod>
    )
}

export default Benefits