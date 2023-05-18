// import { Skeleton } from '@mui/material'
import MovieCardDetails from './MovieCardDetails'
import MovieCardHeading from './MovieCardHeading'
import { Movie } from './types'
import MovieCardImage from './MovieCardImage'

const MovieCard = ({ movie, type }: MovieCardType) => {
    return <MovieCardComponent type={type} movie={movie} />
}

export { MovieCard as TimelineMovie, MovieCard as TrendingMovieModalCard }

const MovieCardComponent = ({ movie, type }: MovieCardType) => {
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

// const MovieCardComponentSkeleton = ({ type, movie }: MovieCardType) => {
//     return (
//         <Skeleton
//             height={type === 'upcoming' ? '26.875rem' : 'auto'}
//             width="100%"
//             variant="rounded"
//             sx={{ bgcolor: 'grey.900' }}
//         >
//             <MovieCardComponent type={type} movie={movie} />
//         </Skeleton>
//     )
// }

/* --------------------------------- TYPES --------------------------------- */
type MovieCardType = {
    movie: Movie
    type: 'upcoming' | 'trending'
}
