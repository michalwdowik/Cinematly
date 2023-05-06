import 'react-vertical-timeline-component/style.min.css'
import { Typography } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useContext } from 'react'
import useScreenType from 'react-screentype-hook'
import { ScrollToTop } from 'react-router-scroll-to-top'
import { motion } from 'framer-motion'
import SectionHeading from '../Components/SectionHeading'
import {
    upcomingMoviesFromFuture,
    upcomingMoviesUpToToday,
} from '../Helpers/fetchUpcomingMovies'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'
// import { upcomingPageBoxSx } from '../ComponentStyles/UpcomingStyles'
import { ThemeContext } from '../Components/ThemeContext'

const Upcoming = () => {
    return (
        <ParallaxProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: '4rem',
                }}
                className="upcomingMovies"
            >
                <ScrollToTop />

                <SectionHeading
                    heading="Upcoming Movies"
                    subheading="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                    leftAligned
                    enableParallax={false}
                />
                <JustReleasedLabel />
                <UpcomingMovies movies={upcomingMoviesUpToToday} />
                <UpcomingLabel />
                <UpcomingMovies movies={upcomingMoviesFromFuture} />
                <StayTunedLabel />
            </motion.div>
        </ParallaxProvider>
    )
}
export default Upcoming

const JustReleasedLabel = () => {
    const { textColor } = useContext(ThemeContext)
    const screenType = useScreenType()

    return (
        <Parallax opacity={[2.5, 0]}>
            <Typography
                variant={screenType.isMobile ? 'h4' : 'h2'}
                sx={{ fontWeight: '700', padding: '2rem', color: textColor }}
            >
                Recent releases
            </Typography>
        </Parallax>
    )
}

const UpcomingLabel = () => {
    const { textColor } = useContext(ThemeContext)
    const screenType = useScreenType()
    return (
        <Parallax speed={-10} opacity={[2.5, 0]}>
            <Typography
                variant={screenType.isMobile ? 'h4' : 'h2'}
                sx={{ fontWeight: '700', paddingY: '2rem', color: textColor }}
            >
                Upcoming
            </Typography>
        </Parallax>
    )
}

const StayTunedLabel = () => {
    const { textColor } = useContext(ThemeContext)
    const screenType = useScreenType()

    return (
        <Parallax opacity={[0, 2.5]}>
            <Typography
                variant={screenType.isMobile ? 'h4' : 'h2'}
                sx={{ fontWeight: '700', padding: '2rem', color: textColor }}
            >
                Stay tuned
            </Typography>
        </Parallax>
    )
}
