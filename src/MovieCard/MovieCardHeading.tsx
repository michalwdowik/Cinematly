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
            className={`title-container ${
                type === 'upcoming' && 'movieCardHeading'
            }`}
            layoutId={`title-container-${id}`}
        >
            {title}
            <Box component="span" className="trendingMovieRating">
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
