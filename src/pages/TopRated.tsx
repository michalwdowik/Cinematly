import { Box } from '@mui/material'
import { motion } from 'framer-motion'
// import { ScrollToTop } from 'react-router-scroll-to-top'
import { topRatedPageBoxSx } from '../ComponentStyles/TopRatedMoviesStyles'
import SectionHeading from '../Components/SectionHeading'
import '../Styles/toprated.css'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'

const TopRated = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
        >
            {/* <ScrollToTop /> */}
            <Box sx={topRatedPageBoxSx}>
                <SectionHeading
                    heading="Top Rated Movies"
                    subheading="Revisit the Legends of the Silver Screen - Our Curated Collection of Timeless Classics"
                    leftAligned
                    enableParallax={false}
                />
            </Box>
            <TopRatedMovies />
        </motion.div>
    )
}

export default TopRated
