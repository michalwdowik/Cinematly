import { Box } from '@mui/material'
import AddToWatchlistButton from '../Components/AddToWatchlistButton'
import { MovieProps } from '../MovieCard/types'
import shortenOverview from '../Helpers/cutText'

const SearchedMovieDetails = ({ movie }: MovieProps) => {
    return (
        <Box className="searched-movie-details">
            <SearchedMovieOverview movie={movie} />
            <DetailsDivider />
            <SearchedMovieInfo movie={movie} />
            <AddToWatchlistButton
                styles="add-to-watchlist-button"
                absolute={false}
                movie={movie}
            />
        </Box>
    )
}

const SearchedMovieOverview = ({ movie }: MovieProps) => {
    return (
        <Box component="span" className="search-movie-overview">
            &quot;{shortenOverview(movie.overview, 20)}&quot;
        </Box>
    )
}

export const DetailsDivider = () => {
    return <Box className="searched-movie-divider" />
}

const SearchedMovieInfo = ({ movie }: MovieProps) => {
    return (
        <Box component="footer" className="search-movie-details">
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
        </Box>
    )
}

export default SearchedMovieDetails
