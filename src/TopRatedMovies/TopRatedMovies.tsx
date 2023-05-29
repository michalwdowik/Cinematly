import { Box } from '@mui/material'
import { memo } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Movie } from '../MovieCard/types'
import TopRatedMovie from './TopRatedMovie'
import TopRatedMovieSkeleton from './TopRatedMoviesSkeleton'
import useFetchMovie from '../Hooks/useFetchMovies'

const TopRatedMovies = () => {
    const topRatedMovies = useFetchMovie('topRated')
    return (
        <Box className="top-rated-movies">
            {topRatedMovies.map((movie: Movie, rankPosition: number) => (
                <LazyLoadComponent
                    key={movie.id}
                    placeholder={<TopRatedMovieSkeleton />}
                >
                    <TopRatedMovie
                        key={movie.id}
                        movie={movie}
                        rankPosition={rankPosition}
                    />
                </LazyLoadComponent>
            ))}
        </Box>
    )
}

const MemoizedTopRatedMovies = memo(TopRatedMovies)
export default MemoizedTopRatedMovies
