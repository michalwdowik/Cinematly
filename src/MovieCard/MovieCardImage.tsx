// import { CSSProperties } from 'react'
// import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const MovieCardImage = ({ backdrop_path, id }: UpcomingMovieImageProps) => {
    return (
        <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
        >
            <img
                className="card-image"
                // style={upcomingMovieImageStyles}
                alt="Trending Movie"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
            />
        </motion.div>
    )
}

export default MovieCardImage

// /* --------------------------------- STYLES --------------------------------- */
// const upcomingMovieImageStyles: CSSProperties = {
//     overflow: 'hidden',
//     // objectFit: 'cover',
//     // width: '100%',
// }

/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieImageProps = {
    backdrop_path: string | null
    id: string
}
