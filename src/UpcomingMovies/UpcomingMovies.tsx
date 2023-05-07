import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import { Movie } from '../types/MoviesTypes'
import UpcomingMovie from './UpcomingMovie'
import useThemeColors from '../Hooks/useThemeColors'
import { UpcomingMovieProps } from './upcomingMoviesTypes'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    const { mainThemeColor } = useThemeColors()
    return (
        <Timeline lineColor={mainThemeColor}>
            {movies.map((movie: Movie) => (
                <UpcomingMovie key={movie.id} movie={movie} movies={movies} />
            ))}
        </Timeline>
    )
}

export default UpcomingMovies

type UpcomingMoviesProps = Pick<UpcomingMovieProps, 'movies'>
