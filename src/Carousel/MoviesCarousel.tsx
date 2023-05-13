import { Carousel as CarouselComponent } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useScreenType from 'react-screentype-hook'
import { v4 as uuid } from 'uuid'
import { ReactNode, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import {
    MovieImage,
    MovieOverview,
    MovieRating,
    MovieReleaseDate,
    MovieTitle,
} from './CarouselMovieDetails'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const MoviesCarousel = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            const movies = await fetchMovies({ type: 'nowPlaying' })
            setNowPlayingMovies(movies)
        }

        fetchNowPlayingMovies()
    }, [])
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
    return <Box sx={carouselMovieOverlayStyles}>{children}</Box>
}

export type MovieDetailsProps = {
    movie: Movie
}
const MovieDetails = ({ movie }: MovieDetailsProps) => {
    const screenType = useScreenType()

    return (
        <CarouselOverlay>
            <Box sx={carouselMovieDetailsStyles}>
                <MovieTitle movie={movie} />
                <Box sx={carouselMovieReleaseDateStyles}>
                    <MovieRating movie={movie} />
                    <MovieReleaseDate movie={movie} />
                </Box>
                {!screenType.isMobile && <MovieOverview movie={movie} />}
            </Box>
        </CarouselOverlay>
    )
}

/* --------------------------------- STYLES --------------------------------- */
const carouselMovieOverlayStyles = {
    position: 'absolute',
    bottom: '0px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundImage: 'linear-gradient(rgb(18,18,18,0), rgb(18,18,18,1))',
    opacity: '0.9',
    transition: 'opacity 0.3s',
    padding: {
        xs: '0rem',
        sm: '3rem',
        md: '4rem',
        lg: '5rem',
    },
    ':hover': {
        opacity: '1',
    },
}

const carouselMovieReleaseDateStyles = {
    display: 'flex',
    gap: '25px',
    marginBottom: '1rem',
    alignItems: 'center',
    color: 'white',
    fontSize: {
        xs: '14px',
        sm: '18px',
        lg: '18px',
    },
    marginLeft: {
        xs: '13px',
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
type CarouselOverlayProps = {
    children: ReactNode
}
