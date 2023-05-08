import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import { Movie } from '../types/MoviesTypes'
import useThemeColors from '../Hooks/useThemeColors'
import TimelineWrapper from './TimelineWrapper'
import MovieCard from '../MovieCard/MovieCard'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    const { mainThemeColor } = useThemeColors()
    return (
        <Timeline lineColor={mainThemeColor}>
            {movies.map((movie: Movie) => (
                <TimelineWrapper key={movie.id} movies={movies} movie={movie}>
                    <MovieCard movie={movie} />
                </TimelineWrapper>
            ))}
        </Timeline>
    )
}

export default UpcomingMovies

type UpcomingMovieProps = {
    movies: Movie[]
    movie: Movie
}

type UpcomingMoviesProps = Pick<UpcomingMovieProps, 'movies'>
