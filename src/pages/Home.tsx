import { ParallaxProvider } from 'react-scroll-parallax'
import { lazy, Suspense } from 'react'
import MemoizedTrendingMovies from '../TrendingMovies/TrendingMovies'
import MemoizedQuote from '../Components/Quote'
import ActorsInfiniteSlider from '../TrendingActors/ActorsInfiniteSlider'
import Headline from '../Components/Headline'

const LazyMoviesCarousel = lazy(() => import('../Carousel/MoviesCarousel'))

const Home = () => {
    return (
        <ParallaxProvider>
            <div className="homeContainer">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyMoviesCarousel />
                </Suspense>
                <Headline
                    enableParallax
                    leftAligned
                    title="What's hot?"
                    subtitle="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <MemoizedTrendingMovies />
                <Headline
                    enableParallax
                    leftAligned={false}
                    title=" Trending Actors"
                    subtitle="From Blockbuster Hits to Indie Gems, Our Trending Actors
            Section Covers It All - Don't Miss Out on the Latest
            Scoop!"
                />
                <ActorsInfiniteSlider />
                <MemoizedQuote />
            </div>
        </ParallaxProvider>
    )
}

export default Home
