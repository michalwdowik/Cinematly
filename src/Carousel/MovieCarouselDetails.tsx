import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import useScreenType from 'react-screentype-hook'
import { Movie, MovieProps } from '../MovieCard/types'
import MovieCarouselOverlay from './MovieCarouselOverlay'

const MovieCarouselDetails = ({ movie }: MovieDetailsProps) => {
    const screenType = useScreenType()

    return (
        <MovieCarouselOverlay>
            <Box className="carouselMovieDetails">
                <MovieTitle movie={movie} />
                <Box className="carouselMovieReleaseDate">
                    <MovieRating movie={movie} />
                    <MovieReleaseDate movie={movie} />
                </Box>
                {!screenType.isMobile && <MovieOverview movie={movie} />}
            </Box>
        </MovieCarouselOverlay>
    )
}

export default MovieCarouselDetails

const MovieTitle = ({ movie }: MovieProps) => {
    return <Box className="carouselMovieTitle">{movie ? movie.title : ''}</Box>
}

const MovieReleaseDate = ({ movie }: MovieProps) => {
    return <Box>{movie ? movie.release_date : ''}</Box>
}

const MovieRating = ({ movie }: MovieProps) => {
    return (
        <Box className="carouselMovieRating">
            <StarIcon className="starIcon" />
            {movie ? movie.vote_average : ''}
        </Box>
    )
}
const MovieOverview = ({ movie }: MovieProps) => {
    return (
        <Box className="carouselMovieOverview">
            {movie ? movie.overview : ''}
        </Box>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type MovieDetailsProps = {
    movie: Movie
}
