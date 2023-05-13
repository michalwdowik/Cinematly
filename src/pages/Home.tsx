import { useParams } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
// import { createPortal } from 'react-dom'
import { lazy, Suspense } from 'react'
import TrendingMovies from '../TrendingMovies/TrendingMovies'
import TrendingMovieModal from '../TrendingMovies/TrendingMovieModal'
import MoviesCarousel from '../Carousel/MoviesCarousel'
import Quote from '../Components/Quote'
import SectionHeading from '../Components/SectionHeading'
import TrendingActors from '../TrendingActors/TrendingActors'

// const LazyTrendingActors = lazy(
//     () => import('../TrendingActors/TrendingActors')
// )
const Home = () => {
    const { id } = useParams()
    // const modal = document.getElementById('modal')

    return (
        <ParallaxProvider>
            <div className="container">
                <MoviesCarousel />
                <SectionHeading
                    enableParallax
                    leftAligned
                    heading="What's hot?"
                    subheading="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <TrendingMovies />
                {/* {createPortal(
                    id && <TrendingMovieModal id={id} />,
                    modal as Element
                )} */}
                {id && <TrendingMovieModal id={id} />}

                <SectionHeading
                    enableParallax
                    leftAligned={false}
                    heading=" Trending Actors"
                    subheading="From Blockbuster Hits to Indie Gems, Our Trending Actors
            Section Covers It All - Don't Miss Out on the Latest
            Scoop!"
                />
                <TrendingActors />
                {/* <Suspense fallback={<div>Loading...</div>}>
                    <LazyTrendingActors />
                </Suspense> */}
                <Quote />
            </div>
        </ParallaxProvider>
    )
}

export default Home
