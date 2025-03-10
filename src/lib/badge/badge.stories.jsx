import { Badge } from './badge';
import BadgeAPI from '../../stories/assets/Badge-api.png';
import { Heading } from '../typography';
import "../../stories/stories.styles.css"

export default {
    title: 'Компоненты/Badge',
    component: Badge,
    parameters: {

        status: {
            type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        }
    },

    tags: ['autodocs'],

};


export const Blue = {
    args: {
        text: "Бейдж",
        accent: "blue",
        size: "base"
    },
}

export const Green = {
    args: {
        text: "Бейдж",
        accent: "green",
        size: "base"
    },
}

export const Pink = {
    args: {
        text: "Бейдж",
        accent: "pink",
        size: "base"
    },
}

export const Cyan = {
    args: {
        text: "Бейдж",
        accent: "cyan",
        size: "base"
    },
}

export const Neutral = {
    args: {
        text: "Бейдж",
        accent: "neutral",
        size: "base"
    },
}

export const Sizes = {
    args: {
        text: "Бейдж",
        accent: "blue",
        size: "small"
    },
}

export const DesignApi = {
    render: () => (
        <>
            <div className="sb-container">
                <div className="sb-section">
                    <div className='sb-section-title'>
                        <Heading text="Дизайн API" as={"h3"} />
                        <hr />
                    </div>
                    <img src={BadgeAPI} />
                </div>
            </div>
        </>
    )
}
