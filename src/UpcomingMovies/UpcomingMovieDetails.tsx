import { Box, Typography } from '@mui/material'
import { colorBlack } from '../ComponentStyles/NavbarStyles'
import {
    movieModalDetailsSx,
    movieDetailsModalSx,
} from '../ComponentStyles/TrendingMoviesStyles'
import cutText from '../Helpers/cutText'
import AddToWatchlistButton from '../TrendingMovies/AddToWatchlistButton'
import { MovieProps } from '../types/MoviesTypes'
import {
    UpcomingMovieTitleProps,
    UpcomingMovieReleaseDateProps,
    UpcomingMovieOriginLanguageProps,
    UpcomingMovieOverviewProps,
} from '../types/UpcomingMoviesTypes'

const UpcomingMovieDetails = ({ movie }: MovieProps) => {
    return (
        <Box sx={upcomingMovieDetailsSx}>
            <Box sx={{ ...movieModalDetailsSx, ...colorBlack }}>
                <AddToWatchlistButton absolute />
                <UpcomingMovieTitle
                    title={movie.title}
                    originTitle={movie.original_title}
                />
                <UpcomingMovieReleaseDate releaseDate={movie.release_date} />
                <UpcomingMovieOriginLanguage
                    originLanguage={movie.original_language}
                />
                <UpcomingMovieOverview overview={movie.overview} />
            </Box>
        </Box>
    )
}

export default UpcomingMovieDetails

const UpcomingMovieTitle = ({
    title,
    originTitle,
}: UpcomingMovieTitleProps) => {
    return (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
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
            <Box component="span" sx={movieDetailsModalSx}>
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
            <Box component="span" sx={movieDetailsModalSx}>
                Language:
            </Box>
            <Typography variant="subtitle1" display="inline">
                &nbsp; {originLanguage}
            </Typography>
        </Box>
    ) : (
        <p>No language</p>
    )
}

const UpcomingMovieOverview = ({ overview }: UpcomingMovieOverviewProps) => {
    return (
        <Typography variant="subtitle2">
            {cutText(overview) || 'No overview'}
        </Typography>
    )
}

export const upcomingMovieDetailsSx = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
}
