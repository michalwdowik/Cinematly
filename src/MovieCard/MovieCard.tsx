import MovieCardDetails from './MovieCardDetails'
import MovieCardHeading from './MovieCardHeading'
import MovieCardImage from './MovieCardImage'
import { Movie } from './types'

const MovieCard = ({ movie, type }: MovieCardType) => {
    return (
        <>
            <MovieCardHeading
                voteAverage={movie.vote_average}
                title={movie.title}
                id={movie.id}
            />
            <MovieCardImage
                type={type}
                backdrop_path={movie.backdrop_path}
                id={movie.id}
            />
            <MovieCardDetails movie={movie} />
        </>
    )
}

export default MovieCard

type MovieCardType = {
    movie: Movie
    type: 'upcoming' | 'trending'
}
