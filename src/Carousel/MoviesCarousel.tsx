import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useScreenType from 'react-screentype-hook'
import { v4 as uuid } from 'uuid'
import { memo } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Skeleton } from '@mui/material'
import MovieCarouselImage from './MovieCarouselImage'
import { Movie } from '../MovieCard/types'
import MovieCarouselDetails from './MovieCarouselDetails'
import useFetchMovie from '../Hooks/useFetchMovies'

const MoviesCarousel = () => {
    const screenType = useScreenType()
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
                <LazyLoadComponent
                    key={movie.id}
                    afterLoad={() => console.log('carousel')}
                    placeholder={<MovieCarouselSkeleton movie={movie} />}
                >
                    <MovieCarousel key={movie.id} movie={movie} />
                </LazyLoadComponent>
            ))}
        </Carousel>
    )
}
const MemoizedMoviesCarousel = memo(MoviesCarousel)
export default MemoizedMoviesCarousel

const MovieCarousel = ({ movie }: MovieCarouselProps) => {
    return (
        <div key={uuid()}>
            <MovieCarouselImage movie={movie} />
            <MovieCarouselDetails movie={movie} />
        </div>
    )
}

const MovieCarouselSkeleton = ({ movie }: MovieCarouselProps) => {
    return (
        <Skeleton
            width="100%"
            key={movie.id}
            variant="rounded"
            sx={{
                backgroundColor: 'grey.900',
            }}
        >
            <MovieCarousel key={movie.id} movie={movie} />
        </Skeleton>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type MovieCarouselProps = {
    movie: Movie
}
