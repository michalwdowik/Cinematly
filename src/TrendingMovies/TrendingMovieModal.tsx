import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import MovieCard from '../MovieCard/MovieCard'
import { Movie } from '../MovieCard/types'
import fetchMovies from '../Helpers/fetchMovies'

const TrendingMovieModal = ({ id }: { id: string }) => {
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])
    const trendingMovie = trendingMovies.find((item: Movie) => item.id === id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const trendingMoviesData = await fetchMovies({ type: 'trending' })

        setTrendingMovies(trendingMoviesData)
    }
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
