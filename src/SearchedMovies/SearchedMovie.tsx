import { Box } from '@mui/material'
import { MovieProps } from '../MovieCard/types'
import SearchedMovieDetails from './SearchedMovieDetails'

const SearchedMovie = ({ movie }: MovieProps) => {
    return (
        <Box key={movie.id} className="searchedMovie">
            {movie.poster_path && (
                <SearchedMoviePoster
                    searchedMovieTitle={movie.title}
                    searchedMoviePoster={movie.poster_path}
                />
            )}
            <SearchedMovieDetails movie={movie} />
        </Box>
    )
}

export default SearchedMovie

const SearchedMoviePoster = ({
    searchedMovieTitle,
    searchedMoviePoster,
}: SearchedMoviePosterProps) => {
    return searchedMoviePoster ? (
        <img
            alt={`${searchedMovieTitle}`}
            className="searchedMoviePoster"
            src={`https://image.tmdb.org/t/p/w300/${searchedMoviePoster}`}
        />
    ) : (
        <img
            alt="No poster placeholder}"
            className="searchedMoviePoster"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png
            `}
        />
    )
}

/* --------------------------------- TYPES --------------------------------- */
type SearchedMoviePosterProps = {
    searchedMovieTitle: string
    searchedMoviePoster: string | null
}
