import { Parallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import TrendingMovie from './TrendingMovie'
import { TrendingMovieProps } from './types'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const fetchedTrendingMovies = await fetchMovies({ type: 'trending' })

const TrendingMovies = () => {
    // const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])
    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const fetchData = async () => {
    //     const trendingMoviesData = await fetchMovies({ type: 'trending' })

    //     setTrendingMovies(trendingMoviesData)
    // }
    return (
        <Parallax
            easing="easeInCubic"
            speed={100}
            scale={[1.25, 0.4]}
            translateY={['350px', '-50px']}
        >
            <ul className="card-list">
                {fetchedTrendingMovies.map((movie: TrendingMovieProps) => (
                    <TrendingMovie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        backdrop_path={movie.backdrop_path}
                        vote_average={movie.vote_average}
                    />
                ))}
            </ul>
        </Parallax>
    )
}

export default TrendingMovies
