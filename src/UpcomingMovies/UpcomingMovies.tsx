import { VerticalTimeline as Timeline } from 'react-vertical-timeline-component'
import { Movie } from '../types/MoviesTypes'
import UpcomingMovie from './UpcomingMovie'
import MAIN_THEME_COLOR from '../Helpers/colors'
import { UpcomingMoviesProps } from '../types/UpcomingMoviesTypes'

const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
    return (
        <Timeline lineColor={MAIN_THEME_COLOR}>
            {movies.map((movie: Movie) => (
                <UpcomingMovie key={movie.id} movie={movie} movies={movies} />
            ))}
        </Timeline>
    )
}

export default UpcomingMovies
