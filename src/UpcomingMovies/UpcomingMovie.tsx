import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { fontSize14px } from '../ComponentStyles/TrendingActorsStyles'
import TimelineWrapper from './TimelineWrapper'
import UpcomingMovieDetails from './UpcomingMovieDetails'
import {
    UpcomingMovieHeadingProps,
    UpcomingMovieImageProps,
    UpcomingMovieProps,
} from '../types/UpcomingMoviesTypes'
import {
    upcomingMovieHeadingSx,
    upcomingMovieImageSx,
} from '../ComponentStyles/UpcomingStyles'

const UpcomingMovie = ({ movie, movies }: UpcomingMovieProps) => {
    return (
        <TimelineWrapper movies={movies} movie={movie}>
            <UpcomingMovieHeading
                id={movie.id}
                voteAverage={movie.vote_average}
                title={movie.title}
            />
            <UpcomingMovieImage backdrop_path={movie.backdrop_path} />
            <UpcomingMovieDetails movie={movie} />
        </TimelineWrapper>
    )
}
export default UpcomingMovie

const UpcomingMovieHeading = ({
    voteAverage,
    title,
}: UpcomingMovieHeadingProps) => {
    return (
        <Box sx={upcomingMovieHeadingSx}>
            <Box component="span" sx={{ display: 'flex' }} className="category">
                <StarIcon sx={fontSize14px} />
                {voteAverage}
            </Box>
            <Typography variant="h6">{title}</Typography>
        </Box>
    )
}

const UpcomingMovieImage = ({ backdrop_path }: UpcomingMovieImageProps) => {
    return (
        <Box sx={upcomingMovieImageSx}>
            <img
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
                alt="x"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
            />
        </Box>
    )
}
