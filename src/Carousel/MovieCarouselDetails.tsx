import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import useScreenType from 'react-screentype-hook'
import { Movie } from '../MovieCard/types'
import MovieCarouselOverlay from './MovieCarouselOverlay'

const MovieCarouselDetails = ({ movie }: MovieDetailsProps) => {
    const screenType = useScreenType()

    return (
        <MovieCarouselOverlay>
            <Box className="carouselMovieDetails">
                <MovieTitle movieTitle={movie.title} />
                <Box className="carouselMovieReleaseDate">
                    <MovieRating movieRating={movie.vote_average} />
                    <MovieReleaseDate
                        movieReleaseDate={movie.release_date || movie.release}
                    />
                </Box>
                {!screenType.isMobile && (
                    <MovieOverview movieOverview={movie.overview} />
                )}
            </Box>
        </MovieCarouselOverlay>
    )
}

export default MovieCarouselDetails

const MovieTitle = ({ movieTitle }: MovieTitleProps) => {
    return <Box className="carouselMovieTitle">{movieTitle}</Box>
}

const MovieReleaseDate = ({ movieReleaseDate }: MovieReleaseDateProps) => {
    return <Box>{movieReleaseDate}</Box>
}

const MovieRating = ({ movieRating }: MovieRatingProps) => {
    return (
        <Box className="carouselMovieRating">
            <StarIcon className="starIcon" />
            {movieRating}
        </Box>
    )
}
const MovieOverview = ({ movieOverview }: MovieOverviewProps) => {
    return <Box className="carouselMovieOverview">{movieOverview}</Box>
}

/* --------------------------------- TYPES --------------------------------- */
type MovieDetailsProps = {
    movie: Movie
}

type MovieTitleProps = {
    movieTitle: string
}

type MovieRatingProps = {
    movieRating: number
}

type MovieReleaseDateProps = {
    movieReleaseDate: string
}

type MovieOverviewProps = {
    movieOverview: string
}
