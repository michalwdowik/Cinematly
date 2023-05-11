import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { MovieProps } from '../MovieCard/types'

export const MovieImage = ({ movie }: MovieProps) => {
    const baseUrl = 'https://image.tmdb.org/t/p/'
    const sizes = [
        { size: 'w300', mediaQuery: '(max-width: 480px)' },
        { size: 'w780', mediaQuery: '(max-width: 768px)' },
        { size: 'w1280', mediaQuery: '(max-width: 1200px)' },
        { size: 'original' },
    ]

    const srcSet = sizes
        .map(({ size, mediaQuery }) => {
            const url = `${baseUrl}${size}${movie && movie.backdrop_path}`
            return mediaQuery ? `${url} ${mediaQuery}` : url
        })
        .join(',')

    return (
        <img
            alt={movie.title}
            src={`${baseUrl}w300${movie && movie.backdrop_path}`}
            srcSet={srcSet}
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    )
}

export const MovieTitle = ({ movie }: MovieProps) => {
    return <Box sx={carouselMovieTitleStyles}>{movie ? movie.title : ''}</Box>
}

export const MovieReleaseDate = ({ movie }: MovieProps) => {
    return <Box>{movie ? movie.release_date : ''}</Box>
}

export const MovieRating = ({ movie }: MovieProps) => {
    return (
        <Box sx={carouselMovieRatingStyles}>
            <StarIcon sx={starIconStyles} />
            {movie ? movie.vote_average : ''}
        </Box>
    )
}
export const MovieOverview = ({ movie }: MovieProps) => {
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
        xs: '24px',
        sm: '32px',
        md: '45px',
        lg: '55px',
    },
    marginLeft: {
        xs: '13px',
        sm: '0px',
        md: '0px',
    },
}

const carouselMovieOverviewStyles = {
    color: 'white',
    fontStyle: 'italic',
    fontSize: '1rem',
    marginRight: '10px',
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
        xs: '14px',
        md: '16px',
        lg: '20px',
    },
}

const carouselMovieRatingStyles = {
    display: 'flex',
    padding: '0',
    alignItems: 'center',
    justifyContent: 'center',
}
