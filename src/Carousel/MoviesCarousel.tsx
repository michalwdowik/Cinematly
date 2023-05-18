import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useScreenType from 'react-screentype-hook'
import { v4 as uuid } from 'uuid'
import { Box, Skeleton } from '@mui/material'
import { memo } from 'react'
import MovieCarouselImage from './MovieCarouselImage'
import { Movie } from '../MovieCard/types'
import useLoadingState from '../Hooks/useLoadingState'
import MovieCarouselDetails from './MovieCarouselDetails'
import useFetchMovie from '../Hooks/useFetchMovies'

const MoviesCarousel = () => {
    const screenType = useScreenType()
    const [isLoaded, onLoad] = useLoadingState()
    const nowPlayingMovies = useFetchMovie('nowPlaying')
    return (
        <Carousel
            key={nowPlayingMovies.length}
            autoPlay
            infiniteLoop
            className="carousel"
            showStatus={false}
            showThumbs={false}
            showIndicators={!screenType.isMobile}
        >
            {nowPlayingMovies.map((movie: Movie) => (
                <>
                    <Box className={`${!isLoaded && 'hidden'}`}>
                        <MovieCarousel
                            key={movie.id}
                            onLoad={onLoad}
                            movie={movie}
                        />
                    </Box>
                    {!isLoaded && (
                        <MovieCarouselSkeleton
                            key={movie.id}
                            onLoad={onLoad}
                            movie={movie}
                        />
                    )}
                </>
            ))}
        </Carousel>
    )
}
const MemoizedMoviesCarousel = memo(MoviesCarousel)
export default MemoizedMoviesCarousel

const MovieCarousel = ({ onLoad, movie }: MovieCarouselProps) => {
    return (
        <div key={uuid()}>
            <MovieCarouselImage onLoad={onLoad} movie={movie} />
            <MovieCarouselDetails movie={movie} />
        </div>
    )
}

const MovieCarouselSkeleton = ({ onLoad, movie }: MovieCarouselProps) => {
    return (
        <Skeleton
            width="100%"
            key={movie.id}
            variant="rounded"
            sx={{
                backgroundColor: 'grey.900',
            }}
        >
            <MovieCarousel key={movie.id} onLoad={onLoad} movie={movie} />
        </Skeleton>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type MovieCarouselProps = {
    onLoad: () => void
    movie: Movie
}
