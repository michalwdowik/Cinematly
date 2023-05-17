import { Skeleton } from '@mui/material'
import MovieCardDetails from './MovieCardDetails'
import MovieCardHeading from './MovieCardHeading'
import MovieCardImage from './MovieCardImage'
import { Movie } from './types'
import useLoadingState from '../Hooks/useLoadingState'

const MovieCard = ({ movie, type }: MovieCardType) => {
    const [isLoaded, onLoad] = useLoadingState()

    return isLoaded || type === 'trending' ? (
        <MovieCardComponent onLoad={onLoad} type={type} movie={movie} />
    ) : (
        <MovieCardComponentSkeleton onLoad={onLoad} type={type} movie={movie} />
    )
}

export { MovieCard as TimelineMovie, MovieCard as TrendingMovieModalCard }

const MovieCardComponent = ({
    movie,
    onLoad,
    type,
}: MovieCardComponentProps) => {
    return (
        <>
            <MovieCardHeading
                voteAverage={movie.vote_average}
                title={movie.title}
                id={movie.id}
            />
            <MovieCardImage
                onLoad={onLoad}
                type={type}
                backdrop_path={movie.backdrop_path}
                id={movie.id}
            />
            <MovieCardDetails movie={movie} />
        </>
    )
}

const MovieCardComponentSkeleton = ({
    type,
    movie,
    onLoad,
}: MovieCardComponentProps) => {
    return (
        <Skeleton
            height={type === 'upcoming' ? '26.875rem' : 'auto'}
            width="100%"
            variant="rounded"
            sx={{ bgcolor: 'grey.900' }}
        >
            <MovieCardComponent onLoad={onLoad} type={type} movie={movie} />
        </Skeleton>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type MovieCardType = {
    movie: Movie
    type: 'upcoming' | 'trending'
}

type MovieCardComponentProps = MovieCardType & { onLoad: () => void }
