import { useLocation, useParams } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import TrendingMovies from '../TrendingMovies/TrendingMovies'
import TrendingMovieModal from '../TrendingMovies/TrendingMovieModal'
import MoviesCarousel from '../Carousel/MoviesCarousel'
import Quote from '../Components/Quote'
import ActorsInfiniteSlider from '../TrendingActors/ActorsInfiniteSlider'
import { trendingMovies } from '../Helpers/fetchMovies'
import useRedirectToError404 from '../Hooks/useRedirectToError404'
import Headline from '../Components/Headline'

const Home = () => {
    const { id } = useParams()
    const location = useLocation()
    const isRootPath = location.pathname === '/'
    const isMovie = id && trendingMovies.some((movie) => movie.id === id)

    useRedirectToError404(Boolean(isMovie), isRootPath)

    return (
        <ParallaxProvider>
            <div className="container">
                <MoviesCarousel />
                <Headline
                    enableParallax
                    leftAligned
                    title="What's hot?"
                    subtitle="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <TrendingMovies />

                {isMovie && <TrendingMovieModal id={id} />}

                <Headline
                    enableParallax
                    leftAligned={false}
                    title=" Trending Actors"
                    subtitle="From Blockbuster Hits to Indie Gems, Our Trending Actors
            Section Covers It All - Don't Miss Out on the Latest
            Scoop!"
                />
                <ActorsInfiniteSlider />
                <Quote />
            </div>
        </ParallaxProvider>
    )
}

export default Home
