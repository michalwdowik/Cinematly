import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import useThemeColors from '../Hooks/useThemeColors'
import TimelineWrapper from './TimelineWrapper'
import { Movie } from '../MovieCard/types'
import MovieCard from '../MovieCard/MovieCard'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    const { mainThemeColor } = useThemeColors()
    return (
        <Timeline lineColor={mainThemeColor}>
            {movies.map((movie: Movie) => (
                <TimelineWrapper key={movie.id} movies={movies}>
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
