import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import useThemeColors from '../Hooks/useThemeColors'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const TimelineWrapper = ({ movies, children }: TimelineWrapperProps) => {
    const { mainThemeColor } = useThemeColors()

    const [justReleasedMovies, setJustReleasedMovies] = useState<Movie[]>([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const justReleasedMoviesData = await fetchMovies({
            type: 'justReleased',
        })

        setJustReleasedMovies(justReleasedMoviesData)
    }
    return (
        <VerticalTimelineElement
            contentStyle={timelineWrapperStyles}
            className="scaleOnHover"
            iconStyle={timelineWrapperIconStyles(mainThemeColor)}
            icon={
                movies === justReleasedMovies ? (
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
