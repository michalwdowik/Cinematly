import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

import { MovieProps } from '../MovieCard/types'

const TopRatedMovieHeadings = ({ movie }: MovieProps) => {
    return (
        <Box sx={topRatedMovieHeadingsStyles}>
            <TopRatedMovieTitle title={movie.title} />
            <TopRatedMovieRating vote_average={movie.vote_average} />
            <TopRatedMovieReleaseDate release={movie.release} />
        </Box>
    )
}

const TopRatedMovieTitle = ({ title }: TopRatedMovieTitleProps) => {
    return <Typography sx={topRatedMovieTitleStyles(title)}>{title}</Typography>
}

const TopRatedMovieRating = ({ vote_average }: TopRatedMovieRatingProps) => {
    return (
        <Box sx={topRatedMovieRatingStyles}>
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
    release,
}: TopRatedMovieReleaseDateProps) => {
    return (
        <Box sx={topRatedMovieReleaseDateStyles}>
            <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
                Release date:
            </Typography>
            <Typography variant="subtitle2">{release}</Typography>
        </Box>
    )
}

export default TopRatedMovieHeadings

const topRatedMovieRatingStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    right: '0',
    fontSize: '1.3rem',
    padding: '1rem',
    fontWeight: '900',
}

const topRatedMovieTitleStyles = (title: string) => ({
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: 'black',
    fontSize: title.length > 23 ? '1.7rem' : '2rem',
})

const topRatedMovieReleaseDateStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
}

const topRatedMovieHeadingsStyles = {
    height: '30%',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '1rem',
    backgroundColor: 'white',
}

type TopRatedMovieRatingProps = {
    vote_average: number
}

type TopRatedMovieTitleProps = {
    title: string
}

type TopRatedMovieReleaseDateProps = {
    release: string
}
