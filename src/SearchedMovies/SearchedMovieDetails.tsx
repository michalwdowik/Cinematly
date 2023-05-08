import { Box, Typography } from '@mui/material'
import AddToWatchlistButton from '../Components/AddToWatchlistButton'
import { MovieProps } from '../MovieCard/types'
import shortenOverview from '../Helpers/cutText'

const SearchedMovieHovered = ({ movie }: MovieProps) => {
    return (
        <Box className="searchedMovieDetails">
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
        <Typography sx={topRatedMovieOverviewStyles}>
            &quot;{shortenOverview(movie.overview, 20)}&quot;
        </Typography>
    )
}

export const DetailsDivider = () => {
    return <Box className="dividerStyle" />
}

const TopRatedMovieDetails = ({ movie }: MovieProps) => {
    return (
        <Typography sx={topRatedMovieDetailsStyles} variant="subtitle2">
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

const topRatedMovieOverviewStyles = {
    maxHeight: '11rem',
    padding: '0.5rem',
    color: 'white',
    fontSize: '0.9rem',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    width: '85%',
    alignSelf: 'center',
    justifySelf: 'center',
    overflow: 'scroll',
}

const topRatedMovieDetailsStyles = {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    fontSize: '0.7rem',
    maxWidth: '12rem',
    alignSelf: 'center',
}
