import { ParallaxProvider } from 'react-scroll-parallax'
import { lazy, Suspense } from 'react'
import MemoizedQuote from '../Components/Quote'
import Headline from '../Components/Headline'

const LazyMoviesCarousel = lazy(() => import('../Carousel/MoviesCarousel'))
const LazyTrendingMovies = lazy(
    () => import('../TrendingMovies/TrendingMovies')
)
const LazyActorsInfiniteSlider = lazy(
    () => import('../TrendingActors/ActorsInfiniteSlider')
)

const Home = () => {
    return (
        <ParallaxProvider>
            <div className="homePage">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyMoviesCarousel />
                </Suspense>
                <Headline
                    enableParallax
                    leftAligned
                    title="What's hot?"
                    subtitle="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyTrendingMovies />
                </Suspense>
                <Headline
                    enableParallax
                    leftAligned={false}
                    title=" Trending Actors"
                    subtitle="From Blockbuster Hits to Indie Gems, Our Trending Actors Section Covers It All - Don't Miss Out on the Latest Scoop!"
                />
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyActorsInfiniteSlider />
                </Suspense>
                <MemoizedQuote />
            </div>
        </ParallaxProvider>
    )
}

export default Home
