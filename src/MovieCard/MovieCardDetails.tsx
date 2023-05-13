import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { MovieProps } from './types'
import AddToWatchlistButton from '../Components/AddToWatchlistButton'
import shortenOverview from '../Helpers/cutText'

const MovieCardDetails = ({ movie }: MovieProps) => {
    return (
        <Box sx={upcomingMovieDetailsStyles}>
            <Box className="movieModalDetails">
                <AddToWatchlistButton absolute movie={movie} />
                <UpcomingMovieTitle
                    title={movie.title}
                    originTitle={movie.original_title}
                />
                <UpcomingMovieReleaseDate
                    releaseDate={movie.release_date || movie.release}
                />
                <UpcomingMovieOriginLanguage
                    originLanguage={movie.original_language}
                />
                <UpcomingMovieOverview overview={movie.overview} />
            </Box>
        </Box>
    )
}

export default MovieCardDetails

const UpcomingMovieTitle = ({
    title,
    originTitle,
}: UpcomingMovieTitleProps) => {
    return (
        <Box display="flex" alignItems="center">
            <Box component="span" fontWeight="bold">
                Original title:
            </Box>
            {originTitle ? (
                <Typography variant="subtitle1" display="inline">
                    &nbsp; {originTitle}
                </Typography>
            ) : (
                <Typography variant="subtitle1" display="inline">
                    &nbsp; {title}
                </Typography>
            )}
        </Box>
    )
}

const UpcomingMovieReleaseDate = ({
    releaseDate,
}: UpcomingMovieReleaseDateProps) => {
    return releaseDate ? (
        <Box display="flex" alignItems="center">
            <Box component="span" fontWeight="bold">
                Release date:
            </Box>
            <Typography variant="subtitle1" display="inline">
                &nbsp; {releaseDate}
            </Typography>
        </Box>
    ) : (
        <Typography variant="subtitle1" display="inline">
            No release date
        </Typography>
    )
}

const UpcomingMovieOriginLanguage = ({
    originLanguage,
}: UpcomingMovieOriginLanguageProps) => {
    return originLanguage ? (
        <Box display="flex" alignItems="center">
            <Box component="span" fontWeight="bold">
                Language:
            </Box>
            <Typography variant="subtitle1" display="inline">
                &nbsp; {originLanguage}
            </Typography>
        </Box>
    ) : (
        <span>No language</span>
    )
}

const UpcomingMovieOverview = ({ overview }: UpcomingMovieOverviewProps) => {
    return (
        <Typography variant="subtitle2">
            {shortenOverview(overview, 20) || 'No overview'}
        </Typography>
    )
}

/* --------------------------------- STYLES --------------------------------- */
export const upcomingMovieDetailsStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.7rem',
    color: 'black',
}
/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieTitleProps = {
    title: string
    originTitle: string | undefined
}
type UpcomingMovieReleaseDateProps = {
    releaseDate: string
}
type UpcomingMovieOriginLanguageProps = {
    originLanguage: string | undefined
}
type UpcomingMovieOverviewProps = {
    overview: string
}
