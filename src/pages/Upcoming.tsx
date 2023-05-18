import 'react-vertical-timeline-component/style.min.css'
// import { ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import TimelineHeadline from '../Components/TimelineHeadline'
import Headline from '../Components/Headline'
import useFetchMovie from '../Hooks/useFetchMovies'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'

const Upcoming = () => {
    const upcomingMovies = useFetchMovie('upcoming')
    const justReleasedMovies = useFetchMovie('justReleased')

    return (
        // <ParallaxProvider>
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
            <UpcomingMovies movies={justReleasedMovies} />
            <TimelineHeadline label="Upcoming" />
            <UpcomingMovies movies={upcomingMovies} />
            <TimelineHeadline label="Stay tuned!" />
        </motion.div>
        // </ParallaxProvider>
    )
}

export default Upcoming
