import { Box } from '@mui/material'
import {
    WatchlistMovieImageProps,
    WatchlistMovieDetailsType,
    WatchlistMovieReleaseDateProps,
    WatchlistMovieTitleProps,
} from './types'
import {
    watchlistMovieImageStyles,
    watchlistMovieReleaseDateStyles,
    watchlistMovieTitleStyles,
} from './commonStyles'

export const WatchlistMovieImage = ({
    movieTitle,
    movieBackdropPath,
    onLoad,
}: WatchlistMovieImageProps) => {
    return movieBackdropPath ? (
        <img
            style={watchlistMovieImageStyles}
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

export const WatchlistMovieTitle = ({
    movieTitle,
}: WatchlistMovieTitleProps) => {
    return <Box sx={watchlistMovieTitleStyles}>{movieTitle}</Box>
}

export const WatchlistMovieReleaseDate = ({
    movieReleaseDate,
}: WatchlistMovieReleaseDateProps) => {
    return <Box sx={watchlistMovieReleaseDateStyles}>{movieReleaseDate}</Box>
}

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
