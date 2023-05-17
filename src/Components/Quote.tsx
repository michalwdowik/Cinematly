import { Parallax } from 'react-scroll-parallax'
import { useContext } from 'react'
import { Box } from '@mui/material'
import { ThemeContext } from '../Contexts/ThemeContext'

const quote = `"Hollywood is a place where they will pay you a thousand
                dollars for a kiss and fifty cents for your soul"`
const credits = `~ Quoted in Marilyn Monroe in Her OwnWords (1990)`

const Quote = () => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Parallax opacity={[0, 1.5]}>
            <Box component="span" color={textColor} className="quote">
                <span>{quote}</span>

                <span className="credits">{credits}</span>
            </Box>
        </Parallax>
    )
}

export default Quote
