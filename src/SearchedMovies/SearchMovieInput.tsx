import { TextField } from '@mui/material'
import useThemeColors from '../Hooks/useThemeColors'

const SearchMovieInput = ({
    searchQuery,
    handleSearchChange,
}: SearchMovieInputProps) => {
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
            inputProps={{ style: { color: 'white' } }}
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
