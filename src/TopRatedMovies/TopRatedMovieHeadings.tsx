import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import {
    topRatedMovieHeadingsSx,
    topRatedMovieRatingSx,
    topRatedMovieReleaseDateSx,
    topRatedMovieTitleSx,
} from '../ComponentStyles/TopRatedMoviesStyles'
import {
    TopRatedMovieRatingProps,
    TopRatedMovieReleaseDateProps,
    TopRatedMovieTitleProps,
} from '../types/TopRatedMoviesTypes'
import { MovieProps } from '../types/MoviesTypes'

const TopRatedMovieHeadings = ({ movie }: MovieProps) => {
    return (
        <Box sx={topRatedMovieHeadingsSx}>
            <TopRatedMovieTitle title={movie.title} />
            <TopRatedMovieRating vote_average={movie.vote_average} />
            <TopRatedMovieReleaseDate release_date={movie.release_date} />
        </Box>
    )
}

const TopRatedMovieTitle = ({ title }: TopRatedMovieTitleProps) => {
    return <Typography sx={topRatedMovieTitleSx(title)}>{title}</Typography>
}

const TopRatedMovieRating = ({ vote_average }: TopRatedMovieRatingProps) => {
    return (
        <Box sx={topRatedMovieRatingSx}>
            <StarIcon
                sx={{
                    fontSize: '1.3rem',
                }}
            />
            {vote_average}
        </Box>
    )
}

const TopRatedMovieReleaseDate = ({
    release_date,
}: TopRatedMovieReleaseDateProps) => {
    return (
        <Box sx={topRatedMovieReleaseDateSx}>
            <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Release date:
            </Typography>
            <Typography variant="subtitle2">{release_date}</Typography>
        </Box>
    )
}

export default TopRatedMovieHeadings
