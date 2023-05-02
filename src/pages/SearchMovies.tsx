/* eslint-disable no-console */
import { Box } from '@mui/material'
import { useState } from 'react'
import SearchedMovies from '../SearchedMovies/SearchedMovies'
import fetchSearchMovies from '../Helpers/fetchSearchMovies'
import SearchMovieInput from '../SearchedMovies/SearchMovieInput'

const SearchMovies = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchedMovies, setSearchedMovies] = useState([])

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        fetchSearchMovies(event.target.value)
            .then((results) => setSearchedMovies(results))
            .catch((error) => console.error(error))
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem',
                width: '100%',
            }}
        >
            <SearchMovieInput
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
            />
            <SearchedMovies searchedMovies={searchedMovies} />
        </Box>
    )
}

export default SearchMovies
