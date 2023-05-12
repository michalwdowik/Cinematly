import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { MovieProps } from '../MovieCard/types'

export const MovieImage = ({ movie }: MovieProps) => {
    const getImageUrl = (size: string) => {
        const baseUrl = 'https://image.tmdb.org/t/p/'
        const backdropPath = movie && movie.backdrop_path

        return `${baseUrl}${size}${backdropPath}`
    }

    return (
        <img
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
            alt={movie.title}
            srcSet={`
          ${getImageUrl('w300')} 300w,
          ${getImageUrl('w780')} 780w,
          ${getImageUrl('w1280')} 1280w
        `}
            sizes="
          (max-width: 600px) 300px,
          (max-width: 1200px) 780px,
          1280px
        "
            src={getImageUrl('w1280')}
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
