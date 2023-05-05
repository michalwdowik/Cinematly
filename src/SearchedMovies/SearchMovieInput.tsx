import { TextField } from '@mui/material'
import { useContext } from 'react'
import useThemeColors from '../Hooks/useThemeColors'
import { ThemeContext } from '../Components/ThemeContext'

const SearchMovieInput = ({
    searchQuery,
    handleSearchChange,
}: SearchMovieInputProps) => {
    const { textColor } = useContext(ThemeContext)
    const { mainThemeColor } = useThemeColors()
    return (
        <TextField
            value={searchQuery}
            onChange={handleSearchChange}
            label="Search Movies"
            placeholder="Type here"
            variant="outlined"
            InputLabelProps={{
                style: { color: mainThemeColor },
            }}
            inputProps={{ style: { color: textColor } }}
            sx={{
                width: '70%',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius: '1rem',
                    },
                },
            }}
        />
    )
}

type SearchMovieInputProps = {
    searchQuery: string
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default SearchMovieInput
