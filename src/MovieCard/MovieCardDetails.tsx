import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { MovieProps } from './types'
import AddToWatchlistButton from '../Components/AddToWatchlistButton'
import shortenOverview from '../Helpers/cutText'

const MovieCardDetails = ({ movie }: MovieProps) => {
    return (
        <Box sx={movieCardDetailsStyles}>
            <Box className="movieCardDetails">
                <AddToWatchlistButton absolute movie={movie} />
                <MovieCardTitle
                    title={movie.title}
                    originTitle={movie.original_title}
                />
                <MovieCardReleaseDate
                    releaseDate={movie.release_date || movie.release}
                />
                <MovieCardOriginLanguage
                    originLanguage={movie.original_language}
                />
                <MovieCardOverview overview={movie.overview} />
            </Box>
        </Box>
    )
}

export default MovieCardDetails

const MovieCardTitle = ({ title, originTitle }: MovieCardTitleProps) => {
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

const MovieCardReleaseDate = ({ releaseDate }: MovieCardReleaseDateProps) => {
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

const MovieCardOriginLanguage = ({
    originLanguage,
}: MovieCardOriginLanguageProps) => {
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

const MovieCardOverview = ({ overview }: MovieCardOverviewProps) => {
    return (
        <Typography variant="subtitle2">
            {shortenOverview(overview, 20) || 'No overview'}
        </Typography>
    )
}

/* --------------------------------- STYLES --------------------------------- */
export const movieCardDetailsStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.7rem',
    color: 'black',
}
/* --------------------------------- TYPES --------------------------------- */
type MovieCardTitleProps = {
    title: string
    originTitle: string | undefined
}
type MovieCardReleaseDateProps = {
    releaseDate: string
}
type MovieCardOriginLanguageProps = {
    originLanguage: string | undefined
}
type MovieCardOverviewProps = {
    overview: string
}
