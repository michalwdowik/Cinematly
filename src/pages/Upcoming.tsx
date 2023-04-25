import 'react-vertical-timeline-component/style.min.css'
import { Box, Typography } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import SectionHeading from '../Components/SectionHeading'
import {
    upcomingMoviesFromFuture,
    upcomingMoviesUpToToday,
} from '../Helpers/fetchUpcomingMovies'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'
import { upcomingPageBoxSx } from '../ComponentStyles/UpcomingStyles'

const Upcoming = () => {
    return (
        <ParallaxProvider>
            <Box sx={upcomingPageBoxSx}>
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
            </Box>
        </ParallaxProvider>
    )
}
export default Upcoming

const JustReleasedLabel = () => {
    return (
        <Parallax opacity={[2.5, 0]}>
            <Typography
                variant="h2"
                sx={{ fontWeight: '700', padding: '2rem' }}
            >
                Just released
            </Typography>
        </Parallax>
    )
}

const UpcomingLabel = () => {
    return (
        <Parallax speed={-10} opacity={[2.5, 0]}>
            <Typography
                variant="h2"
                sx={{ fontWeight: '700', paddingY: '2rem' }}
            >
                Upcoming
            </Typography>
        </Parallax>
    )
}
