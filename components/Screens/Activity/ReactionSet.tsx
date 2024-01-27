import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../../Ui/button';
import { spacing } from '../../../lib/constants';
import { colours } from '../../../lib/constants';
import EmojiPicker from 'rn-emoji-keyboard';
import { addReactionToTask, getReactionsFromTask, removeReactionFromTask } from '../../../app/backend/actions';
import ReactionButton from './ReactionButton';
import { UserAndCrewContext } from '../../Context/Context';
export type IReaction = {
    id: string;
    reaction: string;
    userIDs: string[];
}

const ReactionSet = (props: { taskID: string, _reactions: IReaction[] }) => {
    const context = useContext(UserAndCrewContext);
    const userID = context.user.id;
    const crewID = context.currentCrewID;
    const { _reactions, taskID } = props;
    const [pickingEmoji, setPickingEmoji] = useState(false);
    console.log("passed reactions: ", _reactions)
    const [reactions, setReactions] = useState(_reactions);
    async function addReaction(reaction: string) {
        await addReactionToTask(userID, crewID, taskID, reaction);
        const newReactions = await getReactionsFromTask(crewID, taskID);
        setReactions(newReactions);
    }
    async function removeReaction(reaction: IReaction) {
        await removeReactionFromTask(taskID, reaction.reaction, userID, reaction.id);
        const newReactions = await getReactionsFromTask(crewID, taskID);
        setReactions(newReactions);
    }
    return (
        <View className='flex flex-row gap-x-2'>
            {
                reactions ? reactions.map((reaction) => {
                    return <ReactionButton addReaction={addReaction} removeReaction={removeReaction} crewID={crewID} userID={userID} taskID={taskID} reaction={reaction} key={reaction.id} />
                }) : <></>
            }

            <EmojiPicker hideHeader={true} emojiSize={28} onClose={() => setPickingEmoji(false)} open={pickingEmoji} onEmojiSelected={emoji => addReaction(emoji.emoji)} />

            <Button style={{ marginTop: spacing.gaps.groupedElement }} type="light" text='+' backgroundColour={colours.light.input.background} customOnPress={() => { setPickingEmoji(true); console.log("emoji picking set to true") }} textColor='text-black' />
        </View>
    )
}

export default ReactionSet