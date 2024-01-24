
import { IColour } from "./types";
export let mode = "prod";
export let brandName = "WeClean";

/**must mirror the colours in hidden <View> in activity screen. This is so tailwind recognises these colours when they're dynamically created as classes.*/
export const colours = {
    accent: '#55a38c',
    dark: {
        background: '#080808',
        textPrimary: '#f6f6f6',
        textSecondary: '#848484',
        primary: '#1d1d1d',
        secondary: '#f3f3f3',
        input: {
            background: '#1d1d1d',
            border: '#eaeaea',
            indicator: "#fff"
        }
    },
    light: {
        background: '#fbfbfb',
        textPrimary: '#1d1d1d',
        textSecondary: '#636363',
        primary: '#E6E6E6',
        secondary: '#1d1d1d',
        input: {
            background: '#f3f3f3',
            border: '#1d1d1d',
            indicator: "#1d1d1d"
        }
    },
}
export const spacing = {
    gaps: {
        groupedElement: 8,
        separateElement: 16
    },
    padding: {
        normalX: 20,
        normalY: 24,
        smallerX: 10,
        smallerY: 12,
    },

}