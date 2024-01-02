export let mode = "production";
export let brandName = "WeClean";

/**must mirror the colours in hidden <View> in activity screen. This is so tailwind recognises these colours when they're dynamically created as classes.*/
export type IColour = "black" | "white" | "yellow-500" | "green-500" | "blue-500" | "indigo-500" | "pink-500" | "red-500" | "gray-500" | "slate-900" | "gray-200" | "[#55A38C]" | "[#4E9580]/10" | "white/50" | "[#310973]" | "[#1D1D1D]" | "transparent" | "gray-200/50";
export const colours = {
    pureBlack: 'black' as IColour,
    offBlack: '[#1D1D1D]' as IColour,
    deselected: '[#C1C1C1]' as IColour,
    offWhite: 'gray-200/50' as IColour,
}