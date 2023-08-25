import { Movie } from '../MovieCard/types'

const MovieCarouselImage = ({ movie }: MovieCarouselImageProps) => {
    const imagePath = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
    return <img className="carousel-image" alt={movie.title} src={imagePath} />
}

export default MovieCarouselImage

/* --------------------------------- TYPES --------------------------------- */
type MovieCarouselImageProps = {
    movie: Movie
}
