// import { Parallax } from 'react-scroll-parallax'
import TrendingMovie from './TrendingMovie'
import { TrendingMovieProps } from './types'
import { trendingMovies } from '../Helpers/fetchMovies'

const TrendingMovies = () => {
    return (
        // <Parallax
        //     easing="easeInCubic"
        //     speed={100}
        //     scale={[1.25, 0.5]}
        //     translateY={['350px', '-50px']}
        // >
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
        // </Parallax>
    )
}

export default TrendingMovies
