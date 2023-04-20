import { useParams } from 'react-router-dom'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import TrendingMoviesCards from '../TrendingMovies/TrendingMoviesCards'
import Item from '../TrendingMovies/Item'
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
                <Quote />
                <Parallax
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
                </Parallax>
                {/* <Parallax easing="easeInCubic" speed={100} scale={[1.2, 0.8]}> */}
                <TrendingMoviesCards />
                {/* </Parallax> */}
                {id && <Item id={id} />}
                <Parallax
                    easing="easeInCubic"
                    speed={100}
                    translateY={['-50px', '-200px']}
                    translateX={['-120px', '150px']}
                    opacity={[0.5, 1.5]}
                >
                    {' '}
                    */ /*{' '}
                    <SectionHeading
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
                </Parallax>{' '}
                */
            </div>
        </ParallaxProvider>
    )
}

export default Home
