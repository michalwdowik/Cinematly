import 'react-vertical-timeline-component/style.min.css'
import { Typography } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { CSSProperties, useContext } from 'react'
import useScreenType from 'react-screentype-hook'
import { ScrollToTop } from 'react-router-scroll-to-top'
import { motion } from 'framer-motion'
import SectionHeading from '../Components/SectionHeading'
import {
    upcomingMoviesFromFuture,
    upcomingMoviesUpToToday,
} from '../Helpers/fetchUpcomingMovies'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'
import { ThemeContext } from '../Components/ThemeContext'

const Upcoming = () => {
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
                    heading="Upcoming Movies"
                    subheading="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                    leftAligned
                    enableParallax={false}
                />
                <Heading label="Just released" />
                <UpcomingMovies movies={upcomingMoviesUpToToday} />
                <Heading label="Upcoming" />
                <UpcomingMovies movies={upcomingMoviesFromFuture} />
                <Heading label="Stay tuned!" />
            </motion.div>
            <ScrollToTop />
        </ParallaxProvider>
    )
}
export default Upcoming

const Heading = ({ label }: HeadingProps) => {
    const { textColor } = useContext(ThemeContext)
    const screenType = useScreenType()

    return (
        <Parallax opacity={[2.5, 0]}>
            <Typography
                variant={screenType.isMobile ? 'h4' : 'h2'}
                sx={headingStyles(textColor)}
            >
                {label}
            </Typography>
        </Parallax>
    )
}

const upcomingPageStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '4rem',
}

const headingStyles = (textColor: string) => {
    return { fontWeight: '700', padding: '2rem', color: textColor }
}

type HeadingProps = {
    label: string
}
