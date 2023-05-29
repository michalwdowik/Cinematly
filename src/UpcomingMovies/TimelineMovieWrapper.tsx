import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { CSSProperties, ReactNode } from 'react'
import '../Styles/movie-card.css'

const TimelineMovieWrapper = ({
    releaseDate,
    children,
}: TimelineWrapperProps) => {
    const today = new Date()
    const movieReleaseDate = new Date(releaseDate)
    const isMovieAlreadyReleased = movieReleaseDate < today

    return (
        <VerticalTimelineElement
            contentStyle={timelineWrapperStyles}
            dateClassName="date-styles"
            iconClassName="timeline-wrapper-icon"
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

export default TimelineMovieWrapper

/* --------------------- STYLES --------------------- */
const timelineWrapperStyles: CSSProperties = {
    borderRadius: '4rem',
    color: '#fff',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '0',
    maxWidth: 'min(80vw, 650px)',
    maxHeight: '40rem',
    boxShadow: '8px 8px 12px -5px rgb(0, 0, 0)',
}

/* --------------------- TYPES --------------------- */
type TimelineWrapperProps = {
    releaseDate: string
    children: ReactNode
}
