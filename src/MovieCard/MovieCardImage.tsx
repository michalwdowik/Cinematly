import { motion } from 'framer-motion'

const MovieCardImage = ({
    backdrop_path,
    id,
    type,
    onLoad,
}: MovieCardImageProps) => {
    const movieCardImage = (
        <img
            onLoad={onLoad}
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
    onLoad: () => void
    backdrop_path: string | null
    id: string
    type: 'upcoming' | 'trending'
}
