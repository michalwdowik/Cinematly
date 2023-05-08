import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { CSSProperties, ReactNode } from 'react'
import useThemeColors from '../Hooks/useThemeColors'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const fetchedMovies = await fetchMovies({ type: 'upcoming' })
let moviesFromLast30Days: Movie[] = []
if ('moviesFromLast30Days' in fetchedMovies) {
    moviesFromLast30Days = fetchedMovies.moviesFromLast30Days
}

const TimelineWrapper = ({ movies, movie, children }: TimelineWrapperProps) => {
    const { mainThemeColor } = useThemeColors()
    return (
        <VerticalTimelineElement
            contentStyle={timelineWrapperStyles}
            date={movie.release_date}
            className="scaleOnHover"
            iconStyle={timelineWrapperIconStyles(mainThemeColor)}
            icon={
                movies === moviesFromLast30Days ? (
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
