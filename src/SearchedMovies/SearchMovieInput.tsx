import TextField from '@mui/material/TextField'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const SearchMovieInput = ({
    searchQuery,
    handleSearchChange,
}: SearchMovieInputProps) => {
    const { textColor } = useContext(ThemeContext)
    const { mainThemeColor } = useContext(ThemeContext)
    return (
        <TextField
            value={searchQuery}
            onChange={handleSearchChange}
            label="Search Movies"
            placeholder="Type here"
            variant="outlined"
            InputLabelProps={inputLabelPropsStyles(mainThemeColor)}
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

const inputLabelPropsStyles = (mainThemeColor: string) => {
    return {
        style: { color: mainThemeColor },
    }
}

/* --------------------------------- TYPES --------------------------------- */
type SearchMovieInputProps = {
    searchQuery: string
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
