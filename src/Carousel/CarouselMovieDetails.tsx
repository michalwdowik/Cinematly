/* eslint-disable react-hooks/exhaustive-deps */
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { CSSProperties } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MovieProps } from '../MovieCard/types'

export const MovieImage = ({ movie }: MovieProps) => {
    const getImageUrl = () => {
        const baseUrl = 'https://image.tmdb.org/t/p/'
        const backdropPath = movie && movie.backdrop_path

        return `${baseUrl}w780${backdropPath}`
    }

    return (
        <LazyLoadImage
            style={movieImageStyle}
            alt={movie.title}
            src={getImageUrl()}
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
const movieImageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

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
