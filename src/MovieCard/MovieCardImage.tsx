import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const MovieCardImage = ({ backdrop_path, id, type }: MovieCardImageProps) => {
    const movieCardImage =
        type === 'upcoming' ? (
            <LazyLoadImage
                className="upcoming-movie-image"
                alt="Trending Movie"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
            />
        ) : (
            <img
                className="card-image"
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

/* --------------------------------- TYPES --------------------------------- */
type MovieCardImageProps = {
    backdrop_path: string | null
    id: string
    type: 'upcoming' | 'trending'
}
