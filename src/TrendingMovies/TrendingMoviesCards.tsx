import { Parallax } from 'react-scroll-parallax'
import trendingMovies from '../Helpers/fetchTrendingMovies'
import { TrendingMovieCardsProps } from '../types/TrendingMoviesTypes'
import TrendingMovieCard from './TrendingMovieCard'

const TrendingMoviesCards = () => (
    <Parallax
        easing="easeInCubic"
        speed={100}
        opacity={[0.5, 1.2]}
        scale={[1.25, 0.4]}
        translateY={['350px', '-50px']}
    >
        <ul className="card-list">
            {trendingMovies.map((card: TrendingMovieCardsProps) => (
                <TrendingMovieCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    theme={card.theme}
                    backdrop_path={card.backdrop_path}
                    vote_average={card.vote_average}
                />
            ))}
        </ul>
    </Parallax>
)

export default TrendingMoviesCards
