import { ParallaxProvider } from 'react-scroll-parallax'
import { lazy, Suspense } from 'react'
import MemoizedQuote from '../Components/Quote'
import Headline from '../Components/Headline'
import { MovieCarouselSkeleton } from '../Carousel/MoviesCarousel'
import Loader from '../Components/Loader'

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
            <div className="home-page">
                <Suspense fallback={<MovieCarouselSkeleton />}>
                    <LazyMoviesCarousel />
                </Suspense>
                <Headline
                    enableParallax
                    leftAligned
                    title="What's hot?"
                    subtitle="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <Suspense fallback={<Loader forElement />}>
                    <LazyTrendingMovies />
                </Suspense>
                <Headline
                    enableParallax
                    leftAligned={false}
                    title=" Trending Actors"
                    subtitle="From Blockbuster Hits to Indie Gems, Our Trending Actors Section Covers It All - Don't Miss Out on the Latest Scoop!"
                />
                <Suspense fallback={<Loader forElement />}>
                    <LazyActorsInfiniteSlider />
                </Suspense>
                <MemoizedQuote />
            </div>
        </ParallaxProvider>
    )
}

export default Home
