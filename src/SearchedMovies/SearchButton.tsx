import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import SearchMovies from '../pages/SearchMovies'

const SearchButton = () => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(!isFocused)
    }

    return (
        <>
            <IconButton
                onClick={handleFocus}
                sx={{ p: '10px', color: 'white' }}
            >
                <SearchIcon />
            </IconButton>
            {isFocused && (
                <Box
                    className="unroll-fade-in"
                    sx={{
                        position: 'fixed',
                        top: '55px',
                        left: 0,
                        width: '100%',
                        height: '500px',
                        backgroundColor: 'black',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        overflowX: 'scroll',
                    }}
                >
                    <SearchMovies />
                </Box>
            )}
        </>
    )
}

export default SearchButton
