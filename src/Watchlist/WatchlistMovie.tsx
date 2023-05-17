import { Box, Skeleton } from '@mui/material'
import { MovieProps } from '../MovieCard/types'
import useLoadingState from '../Hooks/useLoadingState'
import shortenOverview from '../Helpers/cutText'
import {
    WatchlistMovieDetailsSkeleton,
    WatchlistMovieDetails,
} from './WatchlistMovieDetails'

const WatchlistMovie = ({ movie }: MovieProps) => {
    const [isLoaded, onLoad] = useLoadingState()

    return (
        <Box className="watchlistMovie">
            <Box className="watchlistMovieDetails">
                {!isLoaded && <WatchlistMovieDetailsSkeleton />}
                <WatchlistMovieDetails
                    onLoad={onLoad}
                    isLoaded={isLoaded}
                    movieTitle={movie.title}
                    movieBackdropPath={movie.backdrop_path}
                    movieReleaseDate={movie.release_date || movie.release}
                />
            </Box>
            {isLoaded ? (
                <WatchlistMovieOverview movieOverview={movie.overview} />
            ) : (
                <WatchlistMovieOverviewSkeleton />
            )}
        </Box>
    )
}

export default WatchlistMovie

const WatchlistMovieOverview = ({
    movieOverview,
}: WatchlistMovieOverviewProps) => {
    return (
        <span className="watchlistMovieOverview">
            {shortenOverview(movieOverview, 20)}
            ..
        </span>
    )
}

const WatchlistMovieOverviewSkeleton = () => {
    return (
        <div className="watchlistMovieOverview">
            <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} width={240} />
            <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} width={180} />
            <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} width={100} />
        </div>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type WatchlistMovieOverviewProps = {
    movieOverview: string
}
