import { useParams } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import TrendingMoviesCards from '../TrendingMovies/TrendingMoviesCards'
import Item from '../TrendingMovies/TrendingMovieModal'
import MoviesCarousel from '../Carousel/MoviesCarousel'
import Quote from '../Quote'
import SectionHeading from '../Components/SectionHeading'
import TrendingActors from '../TrendingActors/TrendingActors'

const Home = () => {
    const { id } = useParams()

    return (
        <ParallaxProvider>
            <div className="containerx">
                <MoviesCarousel />
                <SectionHeading
                    leftAligned
                    heading="What's hot?"
                    subheading="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                />
                <TrendingMoviesCards />
                {id && <Item id={id} />}
                <SectionHeading
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
