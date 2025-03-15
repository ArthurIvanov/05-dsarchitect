import { Card } from "./card";

export default {
    title: "Компоненты/Card",
    component: Card,
    parameters: {
        layout: "centered",
        status: {
            type: "stable", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
    },
    tags: ["autodocs"],
};


export const TextSizeLarge = {
    args: {
        text: "Hello card component",
        textSize: "large"
    }
}

export const TextSizeBase = {
    args: {
        text: "Hello card component",
        textSize: "base"
    }
}

export const CustomBadgeText = {
    args: {
        badgeText: "Hello cistom text"
    }
}