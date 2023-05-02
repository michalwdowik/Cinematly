import { Box } from '@mui/material'
import SearchedMovie from './SearchedMovie'
import { Movie } from '../types/MoviesTypes'

type SearchedMoviesProps = {
    searchedMovies: Movie[]
}

const SearchedMovies = ({ searchedMovies }: SearchedMoviesProps) => {
    return searchedMovies.length > 0 ? (
        <Box
            sx={{
                display: 'flex',
                gap: '1rem',
                maxWidth: '100vw',
                overflowX: 'scroll',
                padding: '1rem',
            }}
        >
            {searchedMovies.map(
                (movie) =>
                    movie.poster_path && (
                        <SearchedMovie key={movie.id} movie={movie} />
                    )
            )}
        </Box>
    ) : (
        <Box
            sx={{
                color: 'white',
                fontSize: '2rem',
                marginTop: '4rem',
                opacity: '50%',
            }}
        >
            Search for some movies...
        </Box>
    )
}

export default SearchedMovies
