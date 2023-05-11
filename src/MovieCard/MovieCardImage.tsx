import { CSSProperties } from 'react'
import { Box } from '@mui/material'

const MovieCardImage = ({ backdrop_path }: UpcomingMovieImageProps) => {
    return (
        <Box>
            <img
                style={upcomingMovieImageStyles}
                alt="x"
                src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
            />
        </Box>
    )
}

export default MovieCardImage

/* --------------------------------- STYLES --------------------------------- */
const upcomingMovieImageStyles: CSSProperties = {
    overflow: 'hidden',
    objectFit: 'cover',
    width: '100%',
}

/* --------------------------------- TYPES --------------------------------- */
type UpcomingMovieImageProps = {
    backdrop_path: string | null
}
