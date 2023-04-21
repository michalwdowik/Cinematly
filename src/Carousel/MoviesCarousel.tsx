import { Carousel as CarouselComponent } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useScreenType from 'react-screentype-hook'
import { Box } from '@mui/material'
import { v4 as uuid } from 'uuid'
import nowPlayingMovies from '../Helpers/fetchNowPlayingMovies'
import {
    carouselOverlaySx,
    movieDetailsSx,
    movieReleaseDateSx,
} from '../ComponentStyles/MovieStyles'
import {
    MovieImage,
    MovieOverview,
    MovieRating,
    MovieReleaseDate,
    MovieTitle,
} from './CarouselMovieDetails'
import { CarouselOverlayProps, Movie } from '../types/MoviesTypes'

const MoviesCarousel = () => {
    const screenType = useScreenType()
    return (
        <CarouselComponent
            key={nowPlayingMovies.length}
            autoPlay
            infiniteLoop
            className="carouselStyles"
            showStatus={false}
            showThumbs={false}
            showIndicators={!screenType.isMobile}
        >
            {nowPlayingMovies.map((movie: Movie) => (
                <div key={uuid()}>
                    <MovieImage movie={movie} />
                    <MovieDetails movie={movie} />
                </div>
            ))}
        </CarouselComponent>
    )
}
export default MoviesCarousel

export const CarouselOverlay = ({ children }: CarouselOverlayProps) => {
    return <Box sx={carouselOverlaySx}>{children}</Box>
}

export type MovieDetailsProps = {
    movie: Movie
}
const MovieDetails = ({ movie }: MovieDetailsProps) => {
    const screenType = useScreenType()

    return (
        <CarouselOverlay>
            <Box sx={movieDetailsSx}>
                <MovieTitle movie={movie} />
                <Box sx={movieReleaseDateSx}>
                    <MovieRating movie={movie} />
                    <MovieReleaseDate movie={movie} />
                </Box>
                {!screenType.isMobile && <MovieOverview movie={movie} />}
            </Box>
        </CarouselOverlay>
    )
}
