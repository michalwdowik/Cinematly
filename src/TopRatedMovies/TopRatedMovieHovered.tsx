import { Box, Typography } from '@mui/material'
import AddToWatchlistButton from '../Components/AddToWatchlistButton'
import { MovieProps } from '../MovieCard/types'
import shortenOverview from '../Helpers/cutText'

const TopRatedMovieHovered = ({ movie }: MovieProps) => {
    return (
        <Box className="topRatedMovie__details">
            <TopRatedMovieOverview movie={movie} />
            <DetailsDivider />
            <TopRatedMovieDetails movie={movie} />
            <AddToWatchlistButton
                styles="addToWatchlist"
                absolute={false}
                movie={movie}
            />
        </Box>
    )
}

const TopRatedMovieOverview = ({ movie }: MovieProps) => {
    return (
        <Typography
            sx={{
                fontSize: '0.9rem',
                color: 'white',
                maxHeight: '200px',
                overflow: 'scroll',
            }}
        >
            &quot;{shortenOverview(movie.overview, 20)}&quot;
        </Typography>
    )
}

export const DetailsDivider = () => {
    return <Box className="dividerStyle" />
}

const TopRatedMovieDetails = ({ movie }: MovieProps) => {
    return (
        <Typography variant="subtitle2">
            <b>Original title: </b>
            {movie.original_title}
            <br />
            <b>Popularity: </b>
            {movie.popularity} votes
            <br />
            <b>Release date: </b>
            {movie.release_date}
            <br />
            <b>Original language: </b>
            {movie.original_language}
        </Typography>
    )
}

export default TopRatedMovieHovered
