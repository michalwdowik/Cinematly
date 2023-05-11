import Typography from '@mui/material/Typography'
import { Parallax } from 'react-scroll-parallax'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const quote = `"Hollywood is a place where they will pay you a thousand
                dollars for a kiss and fifty cents for your soul"`
const credits = `~ Quoted in Marilyn Monroe in Her OwnWords (1990)`

const Quote = () => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Parallax opacity={[0, 1.5]}>
            <Typography color={textColor} sx={quoteStyles}>
                {quote}
                <span className="credits">{credits}</span>
            </Typography>
        </Parallax>
    )
}

export default Quote

/* --------------------------------- STYLES --------------------------------- */
const quoteStyles = {
    fontSize: {
        xs: '1rem',
        sm: '1rem',
        md: '1.2rem',
        lg: '1.5rem',
    },
    width: { xs: '77%', sm: '70%', md: '60%', lg: '50%' },
    margin: '20px auto',
    textAlign: 'center',
    transition: 'background 0.25s, color 0.25s',
    '&:hover': {
        backgroundColor: 'transparent',
        color: '#fc9803',
    },
    marginTop: '5rem',
}
