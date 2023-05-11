import { useContext } from 'react'
import { Box } from '@mui/material'
import SearchedMovie from './SearchedMovie'
import { Movie } from '../MovieCard/types'
import CallToActionLabel from '../Components/CallToActionLabel'
import { ThemeContext } from '../Components/ThemeContext'

type SearchedMoviesProps = {
    searchedMovies: Movie[]
}

const SearchedMovies = ({ searchedMovies }: SearchedMoviesProps) => {
    const { textColor } = useContext(ThemeContext)

    return searchedMovies.length > 0 ? (
        <Box sx={searchedMoviesStyles}>
            {searchedMovies.map(
                (movie) =>
                    movie.poster_path && (
                        <SearchedMovie key={movie.id} movie={movie} />
                    )
            )}
        </Box>
    ) : (
        <CallToActionLabel
            message="Search for some movies..."
            textSize="2rem"
            textColor={textColor}
        />
    )
}

export default SearchedMovies

/* --------------------------------- STYLES --------------------------------- */
const searchedMoviesStyles = {
    display: 'flex',
    gap: '1rem',
    maxWidth: '100vw',
    overflowX: 'scroll',
    padding: '1rem',
}
