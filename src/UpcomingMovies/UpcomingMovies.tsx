import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import { useContext } from 'react'
import TimelineMovie from './TimelineMovie'
import { Movie } from '../MovieCard/types'
import MovieCard from '../MovieCard/MovieCard'
import { ThemeContext } from '../Contexts/ThemeContext'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    const { mainThemeColor } = useContext(ThemeContext)
    return (
        <Timeline lineColor={mainThemeColor}>
            {movies.map((movie: Movie) => (
                <TimelineMovie
                    key={movie.id}
                    releaseDate={movie.release || movie.release_date}
                >
                    <MovieCard type="upcoming" movie={movie} />
                </TimelineMovie>
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
