import { useContext } from 'react'
import { Box } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import SearchedMovie, { SearchedMovieSkeleton } from './SearchedMovie'
import { Movie } from '../MovieCard/types'
import CallToActionLabel from '../Components/CallToActionLabel'
import { ThemeContext } from '../Contexts/ThemeContext'

const SearchedMovies = ({ searchedMovies }: SearchedMoviesProps) => {
    const { textColor } = useContext(ThemeContext)
    const isAnyMovieSearched = searchedMovies.length > 0
    return isAnyMovieSearched ? (
        <Box className="searchedMovies">
            {searchedMovies.map((movie) => (
                <LazyLoadComponent
                    key={movie.id}
                    placeholder={<SearchedMovieSkeleton />}
                >
                    <SearchedMovie key={movie.id} movie={movie} />
                </LazyLoadComponent>
            ))}
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

/* ---------------------- TYPES ---------------------- */
type SearchedMoviesProps = {
    searchedMovies: Movie[]
}
