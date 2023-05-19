import { memo } from 'react'
import { Parallax } from 'react-scroll-parallax'
import TrendingMovie from './TrendingMovie'
import { TrendingMovieProps } from './types'
import useFetchMovie from '../Hooks/useFetchMovies'

const TrendingMovies = () => {
    const trendingMovies = useFetchMovie('trending')

    return (
        <Parallax
            easing="easeInCubic"
            speed={100}
            scale={[1.15, 0.5]}
            translateY={['350px', '-50px']}
        >
            <ul className="card-list">
                {trendingMovies.map((movie: TrendingMovieProps) => (
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
const MemoizedTrendingMovies = memo(TrendingMovies)
export default MemoizedTrendingMovies
