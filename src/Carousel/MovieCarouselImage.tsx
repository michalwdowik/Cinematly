import { CSSProperties } from 'react'
import { Movie } from '../MovieCard/types'
import useGetProperImageSize from '../Hooks/useGetProperImageSize'

const MovieCarouselImage = ({ movie, onLoad }: MovieCarouselImageProps) => {
    const imagePath = useGetProperImageSize(movie.backdrop_path || '')
    return (
        <img
            onLoad={onLoad}
            style={movieImageStyle}
            alt={movie.title}
            src={imagePath}
        />
    )
}

export default MovieCarouselImage
/* --------------------------------- STYLES --------------------------------- */
const movieImageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

/* --------------------------------- TYPES --------------------------------- */
type MovieCarouselImageProps = {
    movie: Movie
    onLoad: () => void
}
