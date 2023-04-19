import { Carousel as CarouselComponent } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useScreenType from 'react-screentype-hook'
import { Box } from '@mui/material'
import { v4 as uuid } from 'uuid'
import nowPlayingMovies from '../Helpers/fetchNowPlayingMovies'
import {
    carouselOverlaySx,
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

const Carousel = () => {
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
                    <CarouselOverlay>
                        <MovieTitle movie={movie} />
                        <Box sx={movieReleaseDateSx}>
                            <MovieReleaseDate movie={movie} />
                            <MovieRating movie={movie} />
                        </Box>
                        {!screenType.isMobile && (
                            <MovieOverview movie={movie} />
                        )}
                    </CarouselOverlay>
                </div>
            ))}
        </CarouselComponent>
    )
}
export default Carousel

export const CarouselOverlay = ({ children }: CarouselOverlayProps) => {
    return <Box sx={carouselOverlaySx}>{children}</Box>
}
