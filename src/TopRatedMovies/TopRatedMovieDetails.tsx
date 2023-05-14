import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import AddToWatchlistButton from '../Components/AddToWatchlistButton'
import { MovieProps } from '../MovieCard/types'
import shortenOverview from '../Helpers/cutText'

const TopRatedMovieDetails = ({ movie }: MovieProps) => {
    return (
        <Box className="topRatedMovie__details">
            <TopRatedMovieOverview movie={movie} />
            <DetailsDivider />
            <TopRatedMovieInfo movie={movie} />
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

const TopRatedMovieInfo = ({ movie }: MovieProps) => {
    return (
        <Typography variant="subtitle2">
            <b>Original title: </b>
            {movie.original_title}
            <br />
            <b>Popularity: </b>
            {movie.popularity} votes
            <br />
            <b>Release date: </b>
            {movie.release}
            <br />
            <b>Original language: </b>
            {movie.original_language}
        </Typography>
    )
}

export default TopRatedMovieDetails

/* --------------------------------- STYLES --------------------------------- */
const topRatedMovieOverviewStyles = {
    fontSize: '0.9rem',
    color: 'white',
    maxHeight: '200px',
    overflow: 'scroll',
}