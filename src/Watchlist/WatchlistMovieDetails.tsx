import { Box, Skeleton } from '@mui/material'

export const WatchlistMovieDetails = ({
    onLoad,
    movieTitle,
    movieBackdropPath,
    movieReleaseDate,
}: WatchlistMovieDetailsType) => {
    return (
        <>
            <WatchlistMovieImage
                onLoad={onLoad}
                movieTitle={movieTitle}
                movieBackdropPath={movieBackdropPath}
            />
            <WatchlistMovieTitle movieTitle={movieTitle} />
            <WatchlistMovieReleaseDate movieReleaseDate={movieReleaseDate} />
        </>
    )
}

const WatchlistMovieImage = ({
    movieTitle,
    movieBackdropPath,
    onLoad,
}: WatchlistMovieImageProps) => {
    return movieBackdropPath ? (
        <img
            className="watchlistMovieImage"
            src={`https://image.tmdb.org/t/p/w300/${movieBackdropPath}`}
            alt={movieTitle}
            onLoad={onLoad}
        />
    ) : (
        <NoImagePlaceholder />
    )
}

const NoImagePlaceholder = () => {
    return (
        <img
            src="https://heuft.com/upload/image/400x267/no_image_placeholder.png"
            alt="empty img placeholder"
        />
    )
}

const WatchlistMovieTitle = ({ movieTitle }: WatchlistMovieTitleProps) => {
    return <Box className="watchlistMovieTitle ">{movieTitle}</Box>
}

const WatchlistMovieReleaseDate = ({
    movieReleaseDate,
}: WatchlistMovieReleaseDateProps) => {
    return <Box className="watchlistMovieReleaseDate">{movieReleaseDate}</Box>
}

/* ----------------------- SKELETON ----------------------- */

export const WatchlistMovieDetailsSkeleton = ({
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

/* ----------------------- TYPES ----------------------- */
type WatchlistMovieDetailsType = Omit<WatchlistMovieDetailsProps, 'isLoaded'>
type WatchlistMovieDetailsProps = {
    isLoaded: boolean
    onLoad: () => void
    movieTitle: string
    movieReleaseDate: string
    movieBackdropPath: string | null
}
type WatchlistMovieImageProps = {
    movieTitle: string
    movieBackdropPath: string | null
    onLoad: () => void
}
type WatchlistMovieTitleProps = {
    movieTitle: string
}
type WatchlistMovieReleaseDateProps = {
    movieReleaseDate: string
}
