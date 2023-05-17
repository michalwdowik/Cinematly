import { Movie } from '../MovieCard/types'
import useGetProperImageSize from '../Hooks/useGetProperImageSize'

const MovieCarouselImage = ({ movie, onLoad }: MovieCarouselImageProps) => {
    const imagePath = useGetProperImageSize(movie.backdrop_path || '')
    return (
        <img
            onLoad={onLoad}
            className="carouselImage"
            alt={movie.title}
            src={imagePath}
        />
    )
}

export default MovieCarouselImage

/* --------------------------------- TYPES --------------------------------- */
type MovieCarouselImageProps = {
    movie: Movie
    onLoad: () => void
}
