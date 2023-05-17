import 'react-vertical-timeline-component/style.min.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { lazy } from 'react'
import { motion } from 'framer-motion'
import useScrollToTop from '../Hooks/useScrollToTop'
import { justReleasedMovies, upcomingMovies } from '../Helpers/fetchMovies'
import TimelineHeadline from '../Components/TimelineHeadline'
import Headline from '../Components/Headline'

const LazyUpcomingMovies = lazy(
    () => import('../UpcomingMovies/UpcomingMovies')
)
const Upcoming = () => {
    useScrollToTop()
    return (
        <ParallaxProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="upcomingPage"
            >
                <Headline
                    title="Upcoming Movies"
                    subtitle="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                    leftAligned
                    enableParallax={false}
                />

                <TimelineHeadline label="Just released" />
                <LazyUpcomingMovies movies={justReleasedMovies} />
                <TimelineHeadline label="Upcoming" />
                <LazyUpcomingMovies movies={upcomingMovies} />
                <TimelineHeadline label="Stay tuned!" />
            </motion.div>
        </ParallaxProvider>
    )
}

export default Upcoming
