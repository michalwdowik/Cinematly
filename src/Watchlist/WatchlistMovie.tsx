import { Box } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { MovieProps } from '../MovieCard/types'
import shortenOverview from '../Helpers/cutText'
import WatchlistMovieDetails from './WatchlistMovieDetails'
import {
    WatchlistMovieDetailsSkeleton,
    WatchlistMovieOverviewSkeleton,
} from './WatchlistSkeleton'

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

/* --------------------------------- TYPES --------------------------------- */
type WatchlistMovieOverviewProps = {
    movieOverview: string
}
