import { Box, Typography } from '@mui/material'
import { MovieProps } from '../MovieCard/types'
import shortenOverview from '../Helpers/cutText'

const WatchlistMovie = ({ movie }: MovieProps) => {
    return (
        <Box sx={watchlistMovieStyles}>
            <WatchlistMovieDetails
                movieTitle={movie.title}
                movieReleaseDate={movie.release || movie.release_date}
                movieBackdropPath={movie.backdrop_path}
            />
            <WatchlistMovieOverview movieOverview={movie.overview} />
        </Box>
    )
}

export default WatchlistMovie

const WatchlistMovieDetails = ({
    movieTitle,
    movieReleaseDate,
    movieBackdropPath,
}: WatchlistMovieDetailsProps) => {
    return (
        <Box sx={watchlistMovieDetailsStyles}>
            <WatchlistMovieImage
                movieTitle={movieTitle}
                movieBackdropPath={movieBackdropPath}
            />
            <WatchlistMovieTitle movieTitle={movieTitle} />
            <WatchlistMovieReleaseDate movieReleaseDate={movieReleaseDate} />
        </Box>
    )
}

const WatchlistMovieImage = ({
    movieTitle,
    movieBackdropPath,
}: WatchlistMovieImageProps) => {
    return movieBackdropPath ? (
        <img
            style={watchlistMovieImageStyles}
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
            src="https://heuft.com/upload/image/400x267/no_image_placeholder.png"
            alt="empty img placeholder"
        />
    )
}

const WatchlistMovieTitle = ({ movieTitle }: WatchlistMovieTitleProps) => {
    return <Box sx={watchlistMovieTitleStyles}>{movieTitle}</Box>
}

const WatchlistMovieReleaseDate = ({
    movieReleaseDate,
}: WatchlistMovieReleaseDateProps) => {
    return <Box sx={watchlistMovieReleaseDateStyles}>{movieReleaseDate}</Box>
}

const WatchlistMovieOverview = ({
    movieOverview,
}: WatchlistMovieOverviewProps) => {
    return (
        <Typography sx={watchlistMovieOverviewStyles}>
            {shortenOverview(movieOverview, 20)}
            ..
        </Typography>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const watchlistMovieStyles = {
    display: 'flex',
    flexGrow: '1',
    gap: '0.5rem',
    alignItems: 'center',
}

const watchlistMovieDetailsStyles = {
    display: 'flex',
    flexDirection: 'column',
    transition: '0.2s ease-in-out all',
    ':hover': {
        opacity: '40%',
    },
}

const watchlistMovieImageStyles = {
    width: '100%',
    minWidth: '7rem',
    borderRadius: '0.5rem',
    marginBottom: '0.2rem',
    marginRight: '0.5rem',
}

const watchlistMovieTitleStyles = {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    marginBottom: '0.25rem',
}

const watchlistMovieReleaseDateStyles = {
    fontSize: '0.5rem',
    fontWeight: 'bold',
    marginBottom: '0.25px',
}

const watchlistMovieOverviewStyles = {
    alignSelf: 'start',
    justifyContent: 'start',
    overflow: 'scroll',
    color: 'black',
    fontSize: '0.75rem',
    transition: '0.2s ease-in-out all',
    ':hover': {
        opacity: '40%',
    },
}

/* --------------------------------- TYPES --------------------------------- */
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

type WatchlistMovieOverviewProps = {
    movieOverview: string
}
