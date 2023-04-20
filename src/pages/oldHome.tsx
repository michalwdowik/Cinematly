import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import MoviesCarousel from '../Carousel/MoviesCarousel'
import Quote from '../Quote'
import SectionHeading from '../Components/SectionHeading'
import TrendingActors from '../TrendingActors/TrendingActors'
import TrendingMovies from './Home'

const Home = () => {
    // <ParallaxProvider>
    /* <CarouselMovies /> */
    /* <Parallax
            easing="easeInCubic"
            speed={50}
            translateY={['200px', '0px']}
            opacity={[0.2, 1]}
        > */
    return <TrendingMovies />

    // </Parallax>

    /* <Parallax
            easing="easeInCubic"
            speed={100}
            translateY={['300px', '150px']}
            translateX={['50px', '-50px']}
            opacity={[0, 1.5]}
        >
            <SectionHeading
                leftAligned
                heading="What's hot?"
                subheading="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
            />
        </Parallax> */
    /* <TrendingMovies /> */
    /* <Parallax
            easing="easeInCubic"
            speed={100}
            translateY={['-50px', '-200px']}
            translateX={['-120px', '150px']}
            opacity={[0.5, 1.5]}
        > */
    /* <SectionHeading
                leftAligned={false}
                heading=" Trending Actors"
                subheading="From Blockbuster Hits to Indie Gems, Our Trending Actors
            Section Covers It All - Don't Miss Out on the Latest
            Scoop!"
            />
        </Parallax>
        <Parallax
            translateY={['-150px', '100px']}
            opacity={[0.4, 2.5]}
            easing="easeInCubic"
        >
            <TrendingActors />
        </Parallax> */
    // </ParallaxProvider>
}

export default Home
