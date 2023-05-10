import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { CSSProperties, ReactNode } from 'react'
import useThemeColors from '../Hooks/useThemeColors'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const justReleased = await fetchMovies({ type: 'justReleased' })

const TimelineWrapper = ({ movies, children }: TimelineWrapperProps) => {
    const { mainThemeColor } = useThemeColors()
    return (
        <VerticalTimelineElement
            contentStyle={timelineWrapperStyles}
            className="scaleOnHover"
            iconStyle={timelineWrapperIconStyles(mainThemeColor)}
            icon={
                movies === justReleased ? (
                    <CelebrationIcon />
                ) : (
                    <AccessTimeIcon />
                )
            }
        >
            {children}
        </VerticalTimelineElement>
    )
}

export default TimelineWrapper

/* --------------------------------- STYLES --------------------------------- */
const timelineWrapperStyles: CSSProperties = {
    borderRadius: '4rem',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '0',
    boxShadow: '8px 8px 12px -5px rgb(0, 0, 0)',
}

const timelineWrapperIconStyles = (mainThemeColor: string) => {
    return {
        background: mainThemeColor,
        color: '#fff',
    }
}

/* --------------------------------- TYPES --------------------------------- */
type TimelineWrapperProps = {
    movies: Movie[]
    children: ReactNode
}
