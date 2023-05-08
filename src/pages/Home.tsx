import { useParams } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import TrendingMovies from '../TrendingMovies/TrendingMovies'
import TrendingMovieModal from '../TrendingMovies/TrendingMovieModal'
import MoviesCarousel from '../Carousel/MoviesCarousel'
import Quote from '../Components/Quote'
import SectionHeading from '../Components/SectionHeading'
import TrendingActors from '../TrendingActors/TrendingActors'

const Home = () => {
    const { id } = useParams()

    return (
        <ParallaxProvider>
            <div className="containerx">
                <MoviesCarousel />
                <SectionHeading
                    enableParallax
                    leftAligned
                    heading="What's hot?"
                    subheading="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <TrendingMovies />
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
                <Quote />
            </div>
        </ParallaxProvider>
    )
}

export default Home
