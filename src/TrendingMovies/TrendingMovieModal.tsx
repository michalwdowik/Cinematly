import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import trendingMovies from '../Helpers/fetchTrendingMovies'
import MovieCard from '../MovieCard/MovieCard'

const TrendingMovieModal = ({ id }: { id: string }) => {
    const movie = trendingMovies.find((item: Element) => item.id === id)

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                className="overlay"
            >
                <Link to="/" />
            </motion.div>

            <Box className="card-content-container open">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <MovieCard movie={movie} />
                </motion.div>
            </Box>
        </>
    )
}

export default TrendingMovieModal
