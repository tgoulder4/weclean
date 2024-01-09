
import { IColour } from "./types";
export let mode = "prod";
export let brandName = "WeClean";

/**must mirror the colours in hidden <View> in activity screen. This is so tailwind recognises these colours when they're dynamically created as classes.*/
export const colours = {
    pureBlack: '#000',
    offBlack: '#1D1D1D',
    deselected: '#C1C1C1',
    offWhite: '#F3F3F3',
}
export const spacing = {
    gaps: {
        groupedElement: 8,
        separateElement: 30
    },
    padding: {
        normalX: 20,
        normalY: 24,
        smallerX: 10,
        smallerY: 12,
    },

}