import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import { memo } from 'react'
import TimelineMovieWrapper from './TimelineMovieWrapper'
import { Movie } from '../MovieCard/types'
import { TimelineMovie } from '../MovieCard/MovieCard'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    const mainThemeColor = import.meta.env.VITE_MAIN_THEME_COLOR

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

const MemoizedUpcomingMovies = memo(UpcomingMovies)
export default MemoizedUpcomingMovies

/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieProps = {
    movies: Movie[]
    movie: Movie
}

type UpcomingMoviesProps = Pick<UpcomingMovieProps, 'movies'>
