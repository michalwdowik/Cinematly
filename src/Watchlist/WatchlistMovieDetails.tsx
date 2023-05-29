import { Box } from '@mui/material'

const WatchlistMovieDetails = ({
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
export default WatchlistMovieDetails

const WatchlistMovieImage = ({
    movieTitle,
    movieBackdropPath,
}: WatchlistMovieImageProps) => {
    return movieBackdropPath ? (
        <img
            className="watchlist-movie-image"
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
            className="watchlist-movie-image"
            src="https://heuft.com/upload/image/400x267/no_image_placeholder.png"
            alt="empty img placeholder"
        />
    )
}

const WatchlistMovieTitle = ({ movieTitle }: WatchlistMovieTitleProps) => {
    return <Box className="watchlist-movie-title ">{movieTitle}</Box>
}

const WatchlistMovieReleaseDate = ({
    movieReleaseDate,
}: WatchlistMovieReleaseDateProps) => {
    return (
        <Box className="watchlist-movie-release-date">{movieReleaseDate}</Box>
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
