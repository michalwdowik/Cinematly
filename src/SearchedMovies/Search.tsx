import { useContext, useState } from 'react'
import { Box } from '@mui/material'
import SearchedMovies from './SearchedMovies'
import SearchMovieInput from './SearchMovieInput'
import { ThemeContext } from '../Contexts/ThemeContext'
import useFetchMovies from '../Hooks/useFetchMovies'

const Search = ({ handleShowSearchModal }: SearchProps) => {
    const { backgroundColor } = useContext(ThemeContext)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }
    const searchedMovies = useFetchMovies('searched', searchQuery)

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
