import { useContext } from 'react'
import { Box } from '@mui/material'
import SearchedMovie, { SearchedMovieSkeleton } from './SearchedMovie'
import { Movie } from '../MovieCard/types'
import CallToActionLabel from '../Components/CallToActionLabel'
import { ThemeContext } from '../Contexts/ThemeContext'
import useLoadingState from '../Hooks/useLoadingState'

const SearchedMovies = ({ searchedMovies }: SearchedMoviesProps) => {
    const { textColor } = useContext(ThemeContext)
    const [isLoaded, onLoad] = useLoadingState()

    return searchedMovies.length > 0 ? (
        <Box className="searchedMovies">
            {searchedMovies.map((movie) =>
                isLoaded ? (
                    <SearchedMovie
                        onLoad={onLoad}
                        key={movie.id}
                        movie={movie}
                    />
                ) : (
                    <SearchedMovieSkeleton
                        onLoad={onLoad}
                        key={movie.id}
                        movie={movie}
                    />
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

/* --------------------------------- TYPES --------------------------------- */
type SearchedMoviesProps = {
    searchedMovies: Movie[]
}
