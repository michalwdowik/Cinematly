import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import TimelineWrapper from './TimelineWrapper'
import UpcomingMovieDetails from './UpcomingMovieDetails'
import { UpcomingMovieProps } from './upcomingMoviesTypes'

const UpcomingMovie = ({ movie, movies }: UpcomingMovieProps) => {
    return (
        <TimelineWrapper movies={movies} movie={movie}>
            <UpcomingMovieHeading
                voteAverage={movie.vote_average}
                title={movie.title}
            />
            <UpcomingMovieImage backdrop_path={movie.backdrop_path} />
            <UpcomingMovieDetails movie={movie} />
        </TimelineWrapper>
    )
}
export default UpcomingMovie

const UpcomingMovieHeading = ({
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
            <Typography variant="h6">{title}</Typography>
        </Box>
    )
}

const UpcomingMovieImage = ({ backdrop_path }: UpcomingMovieImageProps) => {
    return (
        <Box sx={upcomingMovieImageStyles}>
            <img
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                }}
                alt="x"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
            />
        </Box>
    )
}

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

const upcomingMovieImageStyles = {
    overflow: 'hidden',
}

type UpcomingMovieImageProps = {
    backdrop_path: string | null
}
type UpcomingMovieHeadingProps = {
    voteAverage: number
    title: string
}
