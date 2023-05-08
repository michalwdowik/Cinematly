import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

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
                className="category"
            >
                <StarIcon sx={{ fontSize: '14px' }} />
                {voteAverage}
            </Box>
            <Typography color="white" fontWeight="bold" variant="h6">
                {title}
            </Typography>
        </Box>
    )
}
export default MovieCardHeading

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

type UpcomingMovieHeadingProps = {
    voteAverage: number
    title: string
}
