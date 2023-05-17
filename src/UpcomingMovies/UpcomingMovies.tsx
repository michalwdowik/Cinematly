import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import { useContext } from 'react'
import TimelineMovieWrapper from './TimelineMovieWrapper'
import { Movie } from '../MovieCard/types'
import { TimelineMovie } from '../MovieCard/MovieCard'
import { ThemeContext } from '../Contexts/ThemeContext'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    const { mainThemeColor } = useContext(ThemeContext)
    return (
        <Timeline lineColor={mainThemeColor}>
            {movies.map((movie: Movie) => (
                <TimelineMovieWrapper
                    key={movie.id}
                    releaseDate={movie.release || movie.release_date}
                >
                    <TimelineMovie type="upcoming" movie={movie} />
                </TimelineMovieWrapper>
            ))}
        </Timeline>
    )
}

export default UpcomingMovies

/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieProps = {
    movies: Movie[]
    movie: Movie
}

type UpcomingMoviesProps = Pick<UpcomingMovieProps, 'movies'>
