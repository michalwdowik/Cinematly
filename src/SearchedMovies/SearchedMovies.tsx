import { useContext } from 'react'
import { Box, Skeleton } from '@mui/material'
import SearchedMovie from './SearchedMovie'
import { Movie } from '../MovieCard/types'
import CallToActionLabel from '../Components/CallToActionLabel'
import { ThemeContext } from '../Contexts/ThemeContext'
import useLoadingState from '../Hooks/useLoadingState'

const SearchedMovies = ({ searchedMovies }: SearchedMoviesProps) => {
    const { textColor } = useContext(ThemeContext)
    const [isLoaded, onLoad] = useLoadingState()

    return searchedMovies.length > 0 ? (
        <Box sx={searchedMoviesStyles}>
            {searchedMovies.map((movie) =>
                isLoaded ? (
                    <SearchedMovie
                        onLoad={onLoad}
                        key={movie.id}
                        movie={movie}
                    />
                ) : (
                    <Skeleton
                        width="253px"
                        height="380px"
                        sx={{ bgcolor: 'grey.900', borderRadius: '3rem' }}
                        variant="rounded"
                        key={movie.id}
                    >
                        <SearchedMovie
                            onLoad={onLoad}
                            key={movie.id}
                            movie={movie}
                        />
                    </Skeleton>
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

/* --------------------------------- TYPES --------------------------------- */
type SearchedMoviesProps = {
    searchedMovies: Movie[]
}
