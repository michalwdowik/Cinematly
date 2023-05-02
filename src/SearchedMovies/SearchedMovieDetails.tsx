import { Box, Typography } from '@mui/material'
import AddToWatchlistButton from '../TrendingMovies/AddToWatchlistButton'
import { MovieProps } from '../types/MoviesTypes'
import { detailsDividerSx } from '../ComponentStyles/TopRatedMoviesStyles'
import cutText from '../Helpers/cutText'

const SearchedMovieHovered = ({ movie }: MovieProps) => {
    return (
        <Box className="searchedMovie__details">
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
        <Typography sx={{ color: 'white', fontSize: '0.9rem' }}>
            &quot;{cutText(movie.overview, 20)}&quot;
        </Typography>
    )
}

export const DetailsDivider = () => {
    return <Box sx={detailsDividerSx} />
}

const TopRatedMovieDetails = ({ movie }: MovieProps) => {
    return (
        <Typography sx={{ fontSize: '0.7rem' }} variant="subtitle2">
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

export default SearchedMovieHovered
