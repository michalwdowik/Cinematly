import { CSSProperties } from 'react'
// import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const MovieCardImage = ({
    backdrop_path,
    id,
    type,
}: UpcomingMovieImageProps) => {
    const movieCardImage = (
        <img
            className="card-image"
            style={upcomingMovieImageStyles}
            alt="Trending Movie"
            src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
        />
    )

    return type === 'trending' ? (
        <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
        >
            {movieCardImage}
        </motion.div>
    ) : (
        movieCardImage
    )
}

export default MovieCardImage

// /* --------------------------------- STYLES --------------------------------- */
const upcomingMovieImageStyles: CSSProperties = {
    overflow: 'hidden',
    // objectFit: 'cover',
    // width: '100%',
}

/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieImageProps = {
    backdrop_path: string | null
    id: string
    type: 'upcoming' | 'trending'
}
