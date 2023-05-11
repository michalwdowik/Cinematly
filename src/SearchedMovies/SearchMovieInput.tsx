import TextField from '@mui/material/TextField'
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
            sx={searchMovieInputStyles}
        />
    )
}
export default SearchMovieInput

/* --------------------------------- STYLES --------------------------------- */
const searchMovieInputStyles = {
    width: '70%',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '1rem',
            borderColor: 'orange !important',
        },
    },
}

/* --------------------------------- TYPES --------------------------------- */
type SearchMovieInputProps = {
    searchQuery: string
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
