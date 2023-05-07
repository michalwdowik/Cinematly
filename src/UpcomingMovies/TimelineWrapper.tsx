import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { CSSProperties, ReactNode } from 'react'
import { upcomingMoviesUpToToday } from '../Helpers/fetchUpcomingMovies'
import useThemeColors from '../Hooks/useThemeColors'
import { Movie } from '../types/MoviesTypes'

const TimelineWrapper = ({ movies, movie, children }: TimelineWrapperProps) => {
    const { mainThemeColor } = useThemeColors()
    return (
        <VerticalTimelineElement
            contentStyle={timelineWrapperStyles}
            date={movie.release_date}
            className="scaleOnHover"
            iconStyle={timelineWrapperIconStyles(mainThemeColor)}
            icon={
                movies === upcomingMoviesUpToToday ? (
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

type TimelineWrapperProps = {
    movies: Movie[]
    movie: Movie
    children: ReactNode
}
