import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../../Ui/button';
import { IReaction } from './ReactionSet';
import { spacing } from '../../../lib/constants';
import { colours } from '../../../lib/constants';
import { addReactionToTask, removeReactionFromTask } from '../../../app/backend/actions';
import { UserAndCrewContext } from '../../Context/Context';

const ReactionButton = (props: { addReaction: (reaction: string) => Promise<void>, removeReaction: (reaction: IReaction) => Promise<void>, userID: string, taskID: string, crewID: string, reaction: IReaction }) => {
    const { reaction, taskID, userID, crewID, addReaction, removeReaction } = props;
    const [state, setState] = useState({
        selected: false,
        count: props.reaction.userIDs.length,
        backgroundColour: colours.light.input.background
    })
    async function toggleReaction(reaction: IReaction) {
        if (state.selected) {
            setState({ selected: false, backgroundColour: colours.light.input.background, count: state.count - 1 })
            await removeReaction(reaction);
        }
        else {
            setState({ selected: true, backgroundColour: colours.accent, count: state.count + 1 })
            await addReaction(reaction.reaction);
        }
    }
    useEffect(() => {
        if (reaction.userIDs.includes(userID)) {
            setState({ selected: true, backgroundColour: colours.accent, count: state.count })
        }
    }, [])
    return (
        <Button key={reaction.id} style={{ marginTop: spacing.gaps.groupedElement }} type="light" text={reaction.reaction + " " + state.count} backgroundColour={state.backgroundColour} customOnPress={() => { toggleReaction(reaction) }} textColor='text-black' />
    )
}

export default ReactionButton