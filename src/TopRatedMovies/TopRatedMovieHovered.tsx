import { Box, Typography } from '@mui/material'
import AddToWatchlistButton from '../TrendingMovies/AddToWatchlistButton'
import { MovieProps } from '../types/MoviesTypes'
import { colorWhite } from '../ComponentStyles/NavbarStyles'
import { detailsDividerSx } from '../ComponentStyles/MovieStyles'

const TopRatedMovieHovered = ({ movie }: MovieProps) => {
    return (
        <Box className="topRatedMovie__details">
            <TopRatedMovieOverview movie={movie} />
            <DetailsDivider />
            <TopRatedMovieDetails movie={movie} />
            <AddToWatchlistButton styles="addToWatchlist" absolute={false} />
        </Box>
    )
}

const TopRatedMovieOverview = ({ movie }: MovieProps) => {
    return <Typography sx={colorWhite}>&quot;{movie.overview}&quot;</Typography>
}

export const DetailsDivider = () => {
    return <Box sx={detailsDividerSx} />
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
