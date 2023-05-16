import { Skeleton } from '@mui/material'
import MovieCardDetails from './MovieCardDetails'
import MovieCardHeading from './MovieCardHeading'
import MovieCardImage from './MovieCardImage'
import { Movie } from './types'
import useLoadingState from '../Hooks/useLoadingState'

const MovieCard = ({ movie, type }: MovieCardType) => {
    const [isLoaded, onLoad] = useLoadingState()

    return isLoaded || type === 'trending' ? (
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
    ) : (
        <Skeleton
            height={type === 'upcoming' ? '430px' : 'auto'}
            width="100%"
            variant="rounded"
            sx={{ bgcolor: 'grey.900' }}
        >
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
        </Skeleton>
    )
}

export default MovieCard

type MovieCardType = {
    movie: Movie
    type: 'upcoming' | 'trending'
}
