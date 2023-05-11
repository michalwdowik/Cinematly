import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { Box } from '@mui/material'

const MovieCardHeading = ({
    voteAverage,
    title,
}: UpcomingMovieHeadingProps) => {
    return (
        <Box sx={upcomingMovieHeadingStyles}>
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
        </Box>
    )
}
export default MovieCardHeading

/* --------------------------------- STYLES --------------------------------- */
const upcomingMovieHeadingStyles = {
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
}
/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieHeadingProps = {
    voteAverage: number
    title: string
}
