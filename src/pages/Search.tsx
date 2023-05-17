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
            className="searchMovies serachMovieFadeIn"
            bgcolor={backgroundColor}
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
    return <Box className="searchMoviesOverlay" onClick={hideSearchModal} />
}

/* --------------------------------- TYPES --------------------------------- */
type SearchProps = {
    handleShowSearchModal: (pageLabel: string) => void
}
type SearchMoviesOverlayProps = {
    hideSearchModal: () => void
}
