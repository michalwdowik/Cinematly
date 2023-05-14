import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import { useContext } from 'react'
import TimelineWrapper from './TimelineWrapper'
import { Movie } from '../MovieCard/types'
import MovieCard from '../MovieCard/MovieCard'
import { ThemeContext } from '../Components/ThemeContext'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    const { mainThemeColor } = useContext(ThemeContext)
    return (
        <Timeline lineColor={mainThemeColor}>
            {movies.map((movie: Movie) => (
                <TimelineWrapper
                    key={movie.id}
                    releaseDate={movie.release || movie.release_date}
                >
                    <MovieCard type="upcoming" movie={movie} />
                </TimelineWrapper>
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
