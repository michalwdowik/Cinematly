import { Parallax } from 'react-scroll-parallax'
import trendingMovies from '../Helpers/fetchTrendingMovies'
import TrendingMovie from './TrendingMovie'
import { TrendingMovieProps } from './types'

const TrendingMovies = () => (
    <Parallax
        easing="easeInCubic"
        speed={100}
        scale={[1.25, 0.4]}
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

export default TrendingMovies