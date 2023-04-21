import { Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import {
    movieOverviewSx,
    movieRatingSx,
    movieTitleSx,
    starIconSx,
} from '../ComponentStyles/MovieStyles'
import { MovieProps } from '../types/MoviesTypes'

export const MovieImage = ({ movie }: MovieProps) => {
    return (
        <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/original${
                movie && movie.backdrop_path
            }`}
        />
    )
}

export const MovieTitle = ({ movie }: MovieProps) => {
    return <Box sx={movieTitleSx}>{movie ? movie.title : ''}</Box>
}

export const MovieReleaseDate = ({ movie }: MovieProps) => {
    return <Box>{movie ? movie.release_date : ''}</Box>
}

export const MovieRating = ({ movie }: MovieProps) => {
    return (
        <Box sx={movieRatingSx}>
            <StarIcon sx={starIconSx} />
            {movie ? movie.vote_average : ''}
        </Box>
    )
}
export const MovieOverview = ({ movie }: MovieProps) => {
    return <Box sx={movieOverviewSx}>{movie ? movie.overview : ''}</Box>
}
