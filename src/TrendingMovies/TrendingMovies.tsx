import { memo } from 'react'
import TrendingMovie from './TrendingMovie'
import { TrendingMovieProps } from './types'
import useFetchMovie from '../Hooks/useFetchMovies'
import '../Styles/movie-card.css'

const TrendingMovies = () => {
    const trendingMovies = useFetchMovie('trending')

    return (
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
    )
}
const MemoizedTrendingMovies = memo(TrendingMovies)
export default MemoizedTrendingMovies
