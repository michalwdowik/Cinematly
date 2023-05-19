import { Box, Skeleton } from '@mui/material'

export const WatchlistMovieDetails = ({
    movieTitle,
    movieBackdropPath,
    movieReleaseDate,
}: WatchlistMovieDetailsProps) => {
    return (
        <>
            <WatchlistMovieImage
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
}: WatchlistMovieImageProps) => {
    return movieBackdropPath ? (
        <img
            className="watchlistMovieImage"
            src={`https://image.tmdb.org/t/p/w300/${movieBackdropPath}`}
            alt={movieTitle}
        />
    ) : (
        <NoImagePlaceholder />
    )
}

const NoImagePlaceholder = () => {
    return (
        <img
            className="watchlistMovieImage"
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
export const WatchlistMovieDetailsSkeleton = () => {
    return (
        <>
            <WatchlistMovieImageSkeleton />
            <WatchlistMovieTitleSkeleton />
            <WatchlistMovieReleaseDateSkeleton />
        </>
    )
}

const WatchlistMovieImageSkeleton = () => {
    return (
        <Skeleton
            variant="rounded"
            sx={{ borderRadius: '0.5rem' }}
            className="watchlistMovieImage"
            width={120}
            height={68}
        />
    )
}

const WatchlistMovieTitleSkeleton = () => {
    return (
        <>
            <Skeleton variant="text" height={12} />
            <Skeleton variant="text" height={12} width={90} />
        </>
    )
}

const WatchlistMovieReleaseDateSkeleton = () => {
    return (
        <Skeleton
            variant="text"
            width={60}
            height={8}
            sx={{ marginTop: '0.4rem' }}
        />
    )
}

/* ----------------------- TYPES ----------------------- */
type WatchlistMovieDetailsProps = {
    movieTitle: string
    movieReleaseDate: string
    movieBackdropPath: string | null
}
type WatchlistMovieImageProps = {
    movieTitle: string
    movieBackdropPath: string | null
}
type WatchlistMovieTitleProps = {
    movieTitle: string
}
type WatchlistMovieReleaseDateProps = {
    movieReleaseDate: string
}
