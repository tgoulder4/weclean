import * as Haptics from 'expo-haptics';
export default function performHaptic(type: "light" | "medium" | "heavy" | "error" | "warning" | "success" | "selection") {
    switch (type) {
        case "light":
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            break;
        case "medium":
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            break;
        case "heavy":
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            break;
        case "error":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            break;
        case "warning":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            break;
        case "success":
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            break;
        case "selection":
            Haptics.selectionAsync();
            break;
    }
}