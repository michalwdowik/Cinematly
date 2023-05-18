import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { MovieProps } from '../MovieCard/types'

const TopRatedMovieHeadings = ({ movie }: MovieProps) => {
    return (
        <LazyLoadComponent>
            <Box className="topRatedMovieHeadings">
                <TopRatedMovieTitle title={movie.title} />
                <TopRatedMovieRating vote_average={movie.vote_average} />
                <TopRatedMovieReleaseDate release={movie.release} />
            </Box>
        </LazyLoadComponent>
    )
}

const TopRatedMovieTitle = ({ title }: TopRatedMovieTitleProps) => {
    return (
        <LazyLoadComponent>
            <Box
                component="span"
                className="topRatedMovieTitle"
                fontSize={title.length > 23 ? '1.7rem' : '2rem'}
            >
                {title}
            </Box>
        </LazyLoadComponent>
    )
}

const TopRatedMovieRating = ({ vote_average }: TopRatedMovieRatingProps) => {
    return (
        <LazyLoadComponent>
            <Box className="topRatedMovieRating">
                <StarIcon
                    sx={{
                        fontSize: '1.3rem',
                    }}
                />
                {vote_average}
            </Box>
        </LazyLoadComponent>
    )
}

const TopRatedMovieReleaseDate = ({
    release,
}: TopRatedMovieReleaseDateProps) => {
    return (
        <Box className="topRatedMovieReleaseDate">
            <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Release date:
            </Typography>
            <Typography variant="subtitle2">{release}</Typography>
        </Box>
    )
}

export default TopRatedMovieHeadings

/* --------------------------------- TYPES --------------------------------- */
type TopRatedMovieRatingProps = {
    vote_average: number
}

type TopRatedMovieTitleProps = {
    title: string
}

type TopRatedMovieReleaseDateProps = {
    release: string
}
