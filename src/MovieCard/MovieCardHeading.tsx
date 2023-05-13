import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const MovieCardHeading = ({
    voteAverage,
    title,
    id,
}: UpcomingMovieHeadingProps) => {
    return (
        // <Box sx={upcomingMovieHeadingStyles}>
        <motion.div
            style={{
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
            }}
            className="title-container"
            layoutId={`title-container-${id}`}
        >
            <Box
                component="span"
                sx={{
                    display: 'flex',
                }}
                className="trendingMovieRating"
            >
                <StarIcon sx={{ fontSize: '14px' }} />
                {voteAverage}
            </Box>
            <Typography color="white" fontWeight="bold" fontSize="1rem">
                {title}
            </Typography>
            {/* // </Box> */}
        </motion.div>
    )
}
export default MovieCardHeading

/* --------------------------------- STYLES --------------------------------- */
// const upcomingMovieHeadingStyles = {
// top: '30px',
// left: '0',
// minWidth: '150px',
// minHeight: '70px',
// backgroundColor: '#ffa500',
// opacity: '92%',
// borderBottomRightRadius: '15px',
// borderTopRightRadius: '15px',
// position: 'absolute',
// maxWidth: '300px',
// padding: '0.5rem',
// display: 'flex',
// flexDirection: 'column',
// alignItems: 'flex-start',
// justifyContent: 'center',
// alignContent: 'center',
// }
/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieHeadingProps = {
    voteAverage: number
    title: string
    id: string
}
