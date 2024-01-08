
import { IColour } from "./types";
export let mode = "prod";
export let brandName = "WeClean";

/**must mirror the colours in hidden <View> in activity screen. This is so tailwind recognises these colours when they're dynamically created as classes.*/
export const colours = {
    pureBlack: 'black' as IColour,
    offBlack: '[#1D1D1D]' as IColour,
    deselected: '[#C1C1C1]' as IColour,
    offWhite: 'gray-200/50' as IColour,
}
export const spacing = {
    gaps: {
        normal: 30,
        smaller: 8
    }
}