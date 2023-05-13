import 'react-vertical-timeline-component/style.min.css'
import Typography from '@mui/material/Typography'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { CSSProperties, useContext, useEffect, useState } from 'react'
import useScreenType from 'react-screentype-hook'
import { motion } from 'framer-motion'
import SectionHeading from '../Components/SectionHeading'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'
import { ThemeContext } from '../Components/ThemeContext'
import useScrollToTop from '../Hooks/useScrollToTop'
import fetchMovies from '../Helpers/fetchMovies'
import { Movie } from '../MovieCard/types'

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([])
    const [justReleasedMovies, setJustReleasedMovies] = useState<Movie[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const upcomingData = await fetchMovies({ type: 'upcoming' })
        const justReleasedData = await fetchMovies({ type: 'justReleased' })

        setUpcomingMovies(upcomingData)
        setJustReleasedMovies(justReleasedData)
    }

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
                    heading="Upcoming Movies"
                    subheading="From highly-anticipated sequels to exciting new releases, stay in the loop with our Upcoming Movies section"
                    leftAligned
                    enableParallax={false}
                />
                <Heading label="Just released" />
                <UpcomingMovies movies={justReleasedMovies} />
                <Heading label="Upcoming" />
                <UpcomingMovies movies={upcomingMovies} />
                <Heading label="Stay tuned!" />
            </motion.div>
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

/* --------------------------------- STYLES --------------------------------- */
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

/* --------------------------------- TYPES --------------------------------- */
type HeadingProps = {
    label: string
}
