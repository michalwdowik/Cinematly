import { useContext, useState } from 'react'
import { Box } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import SearchedMovie, { SearchedMovieSkeleton } from './SearchedMovie'
import { Movie } from '../MovieCard/types'
import CallToActionLabel from '../Components/CallToActionLabel'
import { ThemeContext } from '../Contexts/ThemeContext'

const SearchedMovies = ({ searchedMovies }: SearchedMoviesProps) => {
    const { textColor } = useContext(ThemeContext)
    const [isLoaded, setIsLoaded] = useState(false)
    const onLoad = () => {
        setIsLoaded(true)
    }
    const isAnyMovieSearched = searchedMovies.length > 0
    return isAnyMovieSearched ? (
        <Box className="searched-movies">
            {searchedMovies.map((movie) => (
                <>
                    {!isLoaded && <SearchedMovieSkeleton />}
                    <LazyLoadComponent
                        key={movie.id}
                        placeholder={<SearchedMovieSkeleton />}
                    >
                        <SearchedMovie
                            isLoaded={isLoaded}
                            onLoad={onLoad}
                            key={movie.id}
                            movie={movie}
                        />
                    </LazyLoadComponent>
                </>
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
