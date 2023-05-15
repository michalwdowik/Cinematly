import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { CSSProperties, ReactNode, useContext } from 'react'
import { ThemeContext } from '../Components/ThemeContext'

const TimelineMovie = ({ releaseDate, children }: TimelineWrapperProps) => {
    const { mainThemeColor } = useContext(ThemeContext)

    const today = new Date()
    const movieReleaseDate = new Date(releaseDate)
    const isMovieAlreadyReleased = movieReleaseDate < today

    return (
        <VerticalTimelineElement
            contentStyle={timelineWrapperStyles}
            className="scaleOnHover"
            iconStyle={timelineWrapperIconStyles(mainThemeColor)}
            icon={
                isMovieAlreadyReleased ? (
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

export default TimelineMovie

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
    releaseDate: string
    children: ReactNode
}
