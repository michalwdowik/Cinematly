import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import useScreenType from 'react-screentype-hook'
import { Movie, MovieProps } from '../MovieCard/types'
import MovieCarouselOverlay from './MovieCarouselOverlay'

const MovieCarouselDetails = ({ movie }: MovieDetailsProps) => {
    const screenType = useScreenType()

    return (
        <MovieCarouselOverlay>
            <Box sx={carouselMovieDetailsStyles}>
                <MovieTitle movie={movie} />
                <Box sx={carouselMovieReleaseDateStyles}>
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
    return <Box sx={carouselMovieTitleStyles}>{movie ? movie.title : ''}</Box>
}

const MovieReleaseDate = ({ movie }: MovieProps) => {
    return <Box>{movie ? movie.release_date : ''}</Box>
}

const MovieRating = ({ movie }: MovieProps) => {
    return (
        <Box sx={carouselMovieRatingStyles}>
            <StarIcon sx={starIconStyles} />
            {movie ? movie.vote_average : ''}
        </Box>
    )
}
const MovieOverview = ({ movie }: MovieProps) => {
    return (
        <Box sx={carouselMovieOverviewStyles}>
            {movie ? movie.overview : ''}
        </Box>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const carouselMovieTitleStyles = {
    color: 'white',
    fontWeight: '900',
    marginBottom: '1rem',
    textAlign: 'left',
    width: '55%',
    fontSize: {
        xs: '1.5rem',
        sm: '2rem',
        md: '2.8125rem',
        lg: '3.4375rem',
    },
    marginLeft: {
        xs: '0.8125rem',
        sm: '0px',
        md: '0px',
    },
}

const carouselMovieOverviewStyles = {
    color: 'white',
    fontStyle: 'italic',
    fontSize: '1rem',
    marginRight: '0.625rem',
    display: 'flex',
    textAlign: 'left',
    width: {
        xs: '70vh',
        sm: '70vh',
        md: '60vh',
        lg: '50vh',
    },
}

const starIconStyles = {
    color: 'white',
    fontSize: {
        xs: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
    },
}

const carouselMovieRatingStyles = {
    display: 'flex',
    padding: '0',
    alignItems: 'center',
    justifyContent: 'center',
}

const carouselMovieReleaseDateStyles = {
    display: 'flex',
    gap: '1.5625rem',
    marginBottom: '1rem',
    alignItems: 'center',
    color: 'white',
    fontSize: {
        xs: '0.875rem',
        sm: '1.125rem',
        lg: '1.125rem',
    },
    marginLeft: {
        xs: '0.8125rem',
        sm: '0px',
        md: '0px',
    },
}

const carouselMovieDetailsStyles = {
    position: 'absolute',
    bottom: {
        lg: '15%',
        md: '10%',
    },
}

/* --------------------------------- TYPES --------------------------------- */
type MovieDetailsProps = {
    movie: Movie
}
