import 'react-vertical-timeline-component/style.min.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { CSSProperties, lazy } from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from '@mui/material'
import SectionHeading from '../SectionHeading/SectionHeadline'
import useScrollToTop from '../Hooks/useScrollToTop'
import { justReleasedMovies, upcomingMovies } from '../Helpers/fetchMovies'
import Heading from '../Components/Heading'

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
                style={upcomingPageStyles}
                className="upcomingMovies"
            >
                <SectionHeading
                    loaded={false}
                    title="Upcoming Movies"
                    subtitle="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                    leftAligned
                    enableParallax={false}
                />
                <Skeleton sx={{ bgcolor: 'grey.900' }}>
                    <Heading label="Just released" />
                </Skeleton>
                <LazyUpcomingMovies movies={justReleasedMovies} />
                <Skeleton sx={{ bgcolor: 'grey.900' }}>
                    <Heading label="Upcoming" />
                </Skeleton>
                <LazyUpcomingMovies movies={upcomingMovies} />
                <Skeleton sx={{ bgcolor: 'grey.900' }}>
                    <Heading label="Stay tuned!" />
                </Skeleton>
            </motion.div>
        </ParallaxProvider>
    )
}

export default Upcoming

/* --------------------------------- STYLES --------------------------------- */
const upcomingPageStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '4rem',
}
