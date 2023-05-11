import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import SectionHeading from '../Components/SectionHeading'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import useScrollToTop from '../Hooks/useScrollToTop'

const TopRated = () => {
    useScrollToTop()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
        >
            <Box sx={topRatedPageBoxStyles}>
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

/* --------------------------------- STYLES --------------------------------- */
const topRatedPageBoxStyles = {
    marginTop: '3rem',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
}
