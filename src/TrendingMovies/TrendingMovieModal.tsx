/* eslint-disable @typescript-eslint/naming-convention */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import trendingMovies from '../Helpers/fetchTrendingMovies'

import { fontSize14px } from '../ComponentStyles/TrendingActorsStyles'
import {
    MovieHeadingModalProps,
    MovieImageModalProps,
} from '../types/TrendingMoviesTypes'
import TrendingMovieModalDetails from './TrendingMovieModalDetails'

const TrendingMovieModal = ({ id }: { id: string }) => {
    const {
        title,
        backdrop_path,
        overview,
        vote_average,
        release,
        original_title,
        original_language,
    } = trendingMovies.find((item: Element) => item.id === id)

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: 'auto' }}
                className="overlay"
            >
                <Link to="/" />
            </motion.div>

            <Box className="card-content-container open">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <MovieHeadingModal
                            voteAverage={vote_average}
                            id={id}
                            title={title}
                        />
                        <MovieImageModal backdropPath={backdrop_path} />
                    </motion.div>

                    <TrendingMovieModalDetails
                        originTitle={original_title}
                        title={title}
                        releaseDate={release}
                        originLanguage={original_language}
                        overview={overview}
                    />
                </motion.div>
            </Box>
        </>
    )
}

export default TrendingMovieModal

const MovieHeadingModal = ({
    voteAverage,
    title,
    id,
}: MovieHeadingModalProps) => {
    return (
        <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
        >
            <Box component="span" sx={{ display: 'flex' }} className="category">
                <StarIcon sx={fontSize14px} />
                {voteAverage}
            </Box>
            <h2>{title}</h2>
        </motion.div>
    )
}

const MovieImageModal = ({ backdropPath }: MovieImageModalProps) => {
    return (
        <img
            className="card-image"
            src={`https://image.tmdb.org/t/p/w780/${backdropPath}`}
            alt=""
        />
    )
}
