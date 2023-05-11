import { useState } from 'react'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'
import SearchMovies from '../pages/SearchMovies'

const SearchButton = () => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(!isFocused)
    }

    return (
        <>
            <Button
                onClick={handleFocus}
                sx={{ p: '16px', color: 'white', fontSize: '15px' }}
            >
                SEARCH
            </Button>
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
                    <SearchMovies handleClick={() => null} />
                </Box>
            )}
        </>
    )
}

export default SearchButton
