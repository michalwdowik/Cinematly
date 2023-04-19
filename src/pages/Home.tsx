import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import CarouselMovies from '../Carousel/Carousel'
import Quote from '../Quote'
import SectionHeading from '../Components/SectionHeading'
import TrendingActors from '../TrendingActors/TrendingActors'

const Home = () => (
    <ParallaxProvider>
        <CarouselMovies />
        <Parallax
            easing="easeInCubic"
            speed={50}
            translateY={['200px', '0px']}
            opacity={[0.2, 1]}
        >
            <Quote />
        </Parallax>
        <Parallax
            easing="easeInCubic"
            speed={20}
            translateX={['-200px', '200px']}
            translateY={['400px', '0px']}
        >
            <SectionHeading
                leftAligned
                heading="What's hot?"
                subheading="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
            />
        </Parallax>
        <Parallax
            easing="easeInCubic"
            speed={20}
            translateX={['200px', '-100px']}
        >
            <SectionHeading
                leftAligned={false}
                heading=" Trending Actors"
                subheading="From Blockbuster Hits to Indie Gems, Our Trending Actors
            Section Covers It All - Don't Miss Out on the Latest
            Scoop!"
            />
        </Parallax>
        <Parallax opacity={[0.4, 2.5]} easing="easeInCubic">
            <TrendingActors />
        </Parallax>
    </ParallaxProvider>
)

export default Home
