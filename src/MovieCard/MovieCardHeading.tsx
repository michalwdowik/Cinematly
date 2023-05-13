import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { MotionStyle, motion } from 'framer-motion'

const MovieCardHeading = ({
    voteAverage,
    title,
    id,
}: UpcomingMovieHeadingProps) => {
    return (
        <motion.div
            style={movieCardHeadingStyles}
            className="title-container"
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

/* --------------------------------- STYLES --------------------------------- */
const movieCardHeadingStyles: MotionStyle = {
    top: '30px',
    left: '0',
    minWidth: '150px',
    minHeight: '70px',
    backgroundColor: '#ffa500',
    opacity: '92%',
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px',
    position: 'absolute',
    maxWidth: '300px',
    padding: '0.5rem',
    display: 'flex',
    zIndex: '2',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.15rem',
}
/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieHeadingProps = {
    voteAverage: number
    title: string
    id: string
}
