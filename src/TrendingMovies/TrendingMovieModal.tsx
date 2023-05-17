import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { TrendingMovieModalCard } from '../MovieCard/MovieCard'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const trendingMovies = await fetchMovies({ movieCategory: 'trending' })

const TrendingMovieModal = ({ id }: { id: string }) => {
    const trendingMovie = trendingMovies.find((item: Movie) => item.id === id)
    return (
        <>
            <TrendingMovieModalOverlay />
            <Box className="card-content-container open">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    {trendingMovie && (
                        <TrendingMovieModalCard
                            type="trending"
                            movie={trendingMovie}
                        />
                    )}
                </motion.div>
            </Box>
        </>
    )
}

export default TrendingMovieModal

const TrendingMovieModalOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2 }}
            className="trendingMovieModalOverlay"
        >
            <Link to="/" />
        </motion.div>
    )
}
