import { Skeleton } from '@mui/material'
import {
    WatchlistMovieDetailsType,
    WatchlistMovieImageProps,
    WatchlistMovieReleaseDateProps,
    WatchlistMovieTitleProps,
} from './types'
import {
    WatchlistMovieImage,
    WatchlistMovieReleaseDate,
    WatchlistMovieTitle,
} from './WatchlistMovieDetails'

const WatchlistMovieDetailsSkeleton = ({
    onLoad,
    movieTitle,
    movieBackdropPath,
    movieReleaseDate,
}: WatchlistMovieDetailsType) => {
    return (
        <>
            <WatchlistMovieImageSkeleton
                onLoad={onLoad}
                movieTitle={movieTitle}
                movieBackdropPath={movieBackdropPath}
            />
            <WatchlistMovieTitleSkeleton movieTitle={movieTitle} />
            <WatchlistMovieReleaseDateSkeleton
                movieReleaseDate={movieReleaseDate}
            />
        </>
    )
}

export default WatchlistMovieDetailsSkeleton

const WatchlistMovieImageSkeleton = ({
    onLoad,
    movieTitle,
    movieBackdropPath,
}: WatchlistMovieImageProps) => {
    return (
        <Skeleton variant="rounded">
            <WatchlistMovieImage
                onLoad={onLoad}
                movieTitle={movieTitle}
                movieBackdropPath={movieBackdropPath}
            />
        </Skeleton>
    )
}

const WatchlistMovieTitleSkeleton = ({
    movieTitle,
}: WatchlistMovieTitleProps) => {
    return (
        <Skeleton variant="text">
            <WatchlistMovieTitle movieTitle={movieTitle} />
        </Skeleton>
    )
}

const WatchlistMovieReleaseDateSkeleton = ({
    movieReleaseDate,
}: WatchlistMovieReleaseDateProps) => {
    return (
        <Skeleton variant="text">
            <WatchlistMovieReleaseDate movieReleaseDate={movieReleaseDate} />
        </Skeleton>
    )
}
