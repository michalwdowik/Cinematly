import TrendingMovie from './TrendingMovie'
import { TrendingMovieProps } from './types'
import { trendingMovies } from '../Helpers/fetchMovies'

const TrendingMovies = () => {
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

export default TrendingMovies
