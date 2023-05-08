import { Box } from '@mui/material'
import { CSSProperties } from 'react'

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

const upcomingMovieImageStyles: CSSProperties = {
    overflow: 'hidden',
    objectFit: 'cover',
    width: '100%',
}

type UpcomingMovieImageProps = {
    backdrop_path: string | null
}
