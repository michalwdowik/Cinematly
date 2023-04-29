import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import {
    TrendingMovieModalDetailsProps,
    MovieOriginalLanguageModalProps,
    MovieOverviewModalProps,
    MovieReleaseDateProps,
    MovieTitleModalProps,
} from '../types/TrendingMoviesTypes'
import AddToWatchlistButton from './AddToWatchlistButton'
import {
    movieDetailsModalSx,
    movieModalDetailsSx,
} from '../ComponentStyles/TrendingMoviesStyles'

const TrendingMovieModalDetails = ({
    movie,
}: TrendingMovieModalDetailsProps) => {
    return (
        <motion.div className=" content-container" animate>
            <Box sx={movieModalDetailsSx}>
                <AddToWatchlistButton absolute movie={movie} />
                <MovieTitleModal
                    movieTitle={movie.title}
                    movieOriginTitle={movie.original_title}
                />
                <MovieReleaseDateModal movieReleaseDate={movie.release} />
                <MovieOriginalLanguageModal
                    movieOriginLanguage={movie.original_language}
                />
                <MovieOverviewModal movieOverview={movie.overview} />
            </Box>
        </motion.div>
    )
}
export default TrendingMovieModalDetails

const MovieTitleModal = ({
    movieTitle,
    movieOriginTitle,
}: MovieTitleModalProps) => {
    return (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Original title:
            </Box>
            {movieOriginTitle ? (
                <Typography variant="subtitle1" display="inline">
                    &nbsp; {movieOriginTitle}
                </Typography>
            ) : (
                <Typography variant="subtitle1" display="inline">
                    &nbsp; {movieTitle}
                </Typography>
            )}
        </Box>
    )
}

const MovieReleaseDateModal = ({ movieReleaseDate }: MovieReleaseDateProps) => {
    return movieReleaseDate ? (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Release date:
            </Box>
            <Typography variant="subtitle1" display="inline">
                &nbsp; {movieReleaseDate}
            </Typography>
        </Box>
    ) : (
        <Typography variant="subtitle1" display="inline">
            No release date
        </Typography>
    )
}

const MovieOriginalLanguageModal = ({
    movieOriginLanguage,
}: MovieOriginalLanguageModalProps) => {
    return movieOriginLanguage ? (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Language:
            </Box>
            <Typography variant="subtitle1" display="inline">
                &nbsp; {movieOriginLanguage}
            </Typography>
        </Box>
    ) : (
        <p>No language</p>
    )
}

const MovieOverviewModal = ({ movieOverview }: MovieOverviewModalProps) => {
    return (
        <Typography variant="subtitle2">
            {movieOverview || 'No overview'}
        </Typography>
    )
}
