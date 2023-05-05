/* eslint-disable no-console */
import { Box, Fade } from '@mui/material'
import { useContext, useState } from 'react'
import SearchedMovies from '../SearchedMovies/SearchedMovies'
import fetchSearchMovies from '../Helpers/fetchSearchMovies'
import SearchMovieInput from '../SearchedMovies/SearchMovieInput'
import { ThemeContext } from '../Components/ThemeContext'

type SearchMoviesProps = {
    handleClick: (pageLabel: string) => void
}

const SearchMovies = ({ handleClick }: SearchMoviesProps) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchedMovies, setSearchedMovies] = useState([])
    const { backgroundColor } = useContext(ThemeContext)
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        fetchSearchMovies(event.target.value)
            .then((results) => setSearchedMovies(results))
            .catch((error) => console.error(error))
    }

    const handleOverlayClick = () => {
        handleClick('SEARCH')
    }
    return (
        <Box className="fade-in-search" sx={searchMoviesSx(backgroundColor)}>
            <SearchMovieInput
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
            />
            <SearchedMovies searchedMovies={searchedMovies} />
            <SearchMoviesOverlay handleOverlayClick={handleOverlayClick} />
        </Box>
    )
}

const searchMoviesSx = (backgroundColor: string) => {
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

export default SearchMovies

type SearchMoviesOverlayProps = {
    handleOverlayClick: () => void
}
const SearchMoviesOverlay = ({
    handleOverlayClick,
}: SearchMoviesOverlayProps) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: '570px',
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 1,
                cursor: 'pointer',
            }}
            onClick={handleOverlayClick}
        />
    )
}
