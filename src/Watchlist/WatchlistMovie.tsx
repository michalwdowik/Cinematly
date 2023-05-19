import { Box, Skeleton } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { MovieProps } from '../MovieCard/types'
import shortenOverview from '../Helpers/cutText'
import {
    WatchlistMovieDetailsSkeleton,
    WatchlistMovieDetails,
} from './WatchlistMovieDetails'

const WatchlistMovie = ({ movie }: MovieProps) => {
    return (
        <Box className="watchlistMovie">
            <Box className="watchlistMovieDetails">
                <LazyLoadComponent
                    placeholder={<WatchlistMovieDetailsSkeleton />}
                >
                    <WatchlistMovieDetails
                        movieTitle={movie.title}
                        movieBackdropPath={movie.backdrop_path}
                        movieReleaseDate={movie.release_date || movie.release}
                    />
                </LazyLoadComponent>
            </Box>
            <LazyLoadComponent placeholder={<WatchlistMovieOverviewSkeleton />}>
                <WatchlistMovieOverview movieOverview={movie.overview} />
            </LazyLoadComponent>
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
