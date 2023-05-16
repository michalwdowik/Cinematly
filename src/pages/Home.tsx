import { useParams } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import TrendingMovies from '../TrendingMovies/TrendingMovies'
import TrendingMovieModal from '../TrendingMovies/TrendingMovieModal'
import MoviesCarousel from '../Carousel/MoviesCarousel'
import Quote from '../Components/Quote'
import SectionHeadline from '../SectionHeadline/SectionHeadline'
import MemoizedTrendingActors from '../TrendingActors/TrendingActors'
import { trendingMovies } from '../Helpers/fetchMovies'

const Home = () => {
    const { id } = useParams()
    const belongsToMovies =
        id && trendingMovies.some((movie) => movie.id !== id)
    return (
        <ParallaxProvider>
            <div className="container">
                <MoviesCarousel />
                <SectionHeadline
                    enableParallax
                    leftAligned
                    title="What's hot?"
                    subtitle="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <TrendingMovies />

                {belongsToMovies ? <TrendingMovieModal id={id} /> : null}

                <SectionHeadline
                    enableParallax
                    leftAligned={false}
                    title=" Trending Actors"
                    subtitle="From Blockbuster Hits to Indie Gems, Our Trending Actors
            Section Covers It All - Don't Miss Out on the Latest
            Scoop!"
                />
                <MemoizedTrendingActors />
                <Quote />
            </div>
        </ParallaxProvider>
    )
}

export default Home
