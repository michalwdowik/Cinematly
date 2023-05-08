import MovieCardDetails from './MovieCardDetails'
import MovieCardHeading from './MovieCardHeading'
import MovieCardImage from './MovieCardImage'
import { MovieProps } from './types'

const MovieCard = ({ movie }: MovieProps) => {
    return (
        <>
            <MovieCardHeading
                voteAverage={movie.vote_average}
                title={movie.title}
            />
            <MovieCardImage backdrop_path={movie.backdrop_path} />
            <MovieCardDetails movie={movie} />
        </>
    )
}

export default MovieCard
