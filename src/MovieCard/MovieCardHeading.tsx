import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const MovieCardHeading = ({
    voteAverage,
    title,
    id,
    type,
}: UpcomingMovieHeadingProps) => {
    return (
        <motion.div
            className={`${
                type === 'upcoming'
                    ? 'upcoming-movie-heading'
                    : 'title-container'
            }`}
            layoutId={type !== 'upcoming' ? `title-container-${id}` : ''}
        >
            {title}
            <Box component="span" className="trending-movie-rating">
                <StarIcon sx={{ fontSize: '0.9rem' }} />
                {voteAverage}
            </Box>
        </motion.div>
    )
}
export default MovieCardHeading

/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieHeadingProps = {
    type: 'upcoming' | 'trending'
    voteAverage: number
    title: string
    id: string
}
