import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const MovieCardHeading = ({
    voteAverage,
    title,
    id,
}: UpcomingMovieHeadingProps) => {
    return (
        <motion.div
            className="title-container movieCardHeading"
            layoutId={`title-container-${id}`}
        >
            <Box component="span" className="trendingMovieRating">
                <StarIcon sx={{ fontSize: '0.9rem' }} />
                {voteAverage}
            </Box>
            {title}
        </motion.div>
    )
}
export default MovieCardHeading

/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieHeadingProps = {
    voteAverage: number
    title: string
    id: string
}
