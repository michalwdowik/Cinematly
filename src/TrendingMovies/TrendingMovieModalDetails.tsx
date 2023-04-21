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
    title,
    releaseDate,
    originLanguage,
    originTitle,
    overview,
}: TrendingMovieModalDetailsProps) => {
    return (
        <motion.div className=" content-container" animate>
            <Box sx={movieModalDetailsSx}>
                <AddToWatchlistButton />
                <MovieTitleModal title={title} originTitle={originTitle} />
                <MovieReleaseDateModal releaseDate={releaseDate} />
                <MovieOriginalLanguageModal originLanguage={originLanguage} />
                <MovieOverviewModal overview={overview} />
            </Box>
        </motion.div>
    )
}
export default TrendingMovieModalDetails

const MovieTitleModal = ({ title, originTitle }: MovieTitleModalProps) => {
    return (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Original title:
            </Box>
            {originTitle ? (
                <Typography variant="subtitle1" display="inline">
                    {originTitle}
                </Typography>
            ) : (
                <Typography variant="subtitle1" display="inline">
                    {title}
                </Typography>
            )}
        </Box>
    )
}

const MovieReleaseDateModal = ({ releaseDate }: MovieReleaseDateProps) => {
    return releaseDate ? (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Release date:
            </Box>
            <Typography variant="subtitle1" display="inline">
                {releaseDate}
            </Typography>
        </Box>
    ) : (
        <p>No release date </p>
    )
}

const MovieOriginalLanguageModal = ({
    originLanguage,
}: MovieOriginalLanguageModalProps) => {
    return originLanguage ? (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={movieDetailsModalSx}>
                Language:
            </Box>
            <Typography variant="subtitle1" display="inline">
                {originLanguage}
            </Typography>
        </Box>
    ) : (
        <p>No language</p>
    )
}

const MovieOverviewModal = ({ overview }: MovieOverviewModalProps) => {
    return (
        <Typography variant="subtitle2">{overview || 'No overview'}</Typography>
    )
}
