import { motion } from 'framer-motion'
import MovieCardDetails from './MovieCardDetails'
import MovieCardHeading from './MovieCardHeading'
import { Movie } from './types'
import MovieCardImage from './MovieCardImage'

const MovieCard = ({ movie, type }: MovieCardType) => {
    return (
        <motion.div className="content-container" animate>
            <MovieCardHeading
                type={type}
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
        </motion.div>
    )
}

export { MovieCard as TimelineMovie, MovieCard as TrendingMovieModalCard }

/* --------------------------------- TYPES --------------------------------- */
type MovieCardType = {
    movie: Movie
    type: 'upcoming' | 'trending'
}
