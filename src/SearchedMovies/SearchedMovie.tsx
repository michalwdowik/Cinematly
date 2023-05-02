import { Box } from '@mui/material'
import { MovieProps } from '../types/MoviesTypes'
import SearchedMovieHovered from './SearchedMovieDetails'

const SearchedMovie = ({ movie }: MovieProps) => {
    return (
        <Box key={movie.id} className="searchedMovie">
            {movie.poster_path && (
                <SearchedMoviePoster
                    searchedMovieTitle={movie.title}
                    searchedMoviePoster={movie.poster_path}
                />
            )}
            <SearchedMovieHovered movie={movie} />
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
        <div>No poster</div>
    )
}

type SearchedMoviePosterProps = {
    searchedMovieTitle: string
    searchedMoviePoster: string | null
}
