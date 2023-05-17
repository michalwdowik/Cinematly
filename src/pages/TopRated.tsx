import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import useScrollToTop from '../Hooks/useScrollToTop'
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies'
import Headline from '../Components/Headline'

const TopRated = () => {
    useScrollToTop()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
        >
            <Box className="topRatedPageBox">
                <Headline
                    title="Top Rated Movies"
                    subtitle="Revisit the Legends of the Silver Screen - Our Curated Collection of Timeless Classics"
                    leftAligned
                    enableParallax={false}
                />
            </Box>
            <TopRatedMovies />
        </motion.div>
    )
}

export default TopRated
