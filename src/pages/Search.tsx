import { useContext, useState } from 'react'
import { Box } from '@mui/material'
import SearchedMovies from '../SearchedMovies/SearchedMovies'
import SearchMovieInput from '../SearchedMovies/SearchMovieInput'
import { ThemeContext } from '../Contexts/ThemeContext'
import fetchMovies from '../Helpers/fetchMovies'
import { Movie } from '../MovieCard/types'

const Search = ({ handleShowSearchModal }: SearchProps) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])
    const { backgroundColor } = useContext(ThemeContext)

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        fetchMovies({
            movieCategory: 'searched',
            movieTitle: `${event.target.value}`,
        }).then((results) => setSearchedMovies(results))
    }

    const hideSearchModal = () => {
        handleShowSearchModal('SEARCH')
    }
    return (
        <Box
            className="serachMovieFadeIn"
            sx={searchMoviesStyles(backgroundColor)}
        >
            <SearchMovieInput
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
            />
            <SearchedMovies searchedMovies={searchedMovies} />
            <SearchMoviesOverlay hideSearchModal={hideSearchModal} />
        </Box>
    )
}

export default Search

const SearchMoviesOverlay = ({ hideSearchModal }: SearchMoviesOverlayProps) => {
    return <Box sx={searchMoviesOverlayStyles} onClick={hideSearchModal} />
}

/* --------------------------------- STYLES --------------------------------- */
const searchMoviesOverlayStyles = {
    position: 'fixed',
    top: '570px',
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
    cursor: 'pointer',
}

const searchMoviesStyles = (backgroundColor: string) => {
    return {
        position: 'fixed',
        top: '70px',
        left: 0,
        width: '100%',
        height: '500px',
        zIndex: 2,
        display: 'flex',
        overflowX: 'scroll',
        paddingTop: '2rem',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor,
    }
}

/* --------------------------------- TYPES --------------------------------- */
type SearchProps = {
    handleShowSearchModal: (pageLabel: string) => void
}
type SearchMoviesOverlayProps = {
    hideSearchModal: () => void
}
