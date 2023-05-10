import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import MovieCard from '../MovieCard/MovieCard'
import fetchMovies from '../Helpers/fetchMovies'
import { Movie } from '../MovieCard/types'

const trendingMovies = await fetchMovies({ type: 'trending' })

const TrendingMovieModal = ({ id }: { id: string }) => {
    const trendingMovie = trendingMovies.find((item: Movie) => item.id === id)

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                className="trendingMovieModalOverlay"
            >
                <Link to="/" />
            </motion.div>

            <Box className="card-content-container open">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    {trendingMovie && <MovieCard movie={trendingMovie} />}
                </motion.div>
            </Box>
        </>
    )
}

export default TrendingMovieModal
