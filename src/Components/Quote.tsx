import Typography from '@mui/material/Typography'
import { Parallax } from 'react-scroll-parallax'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const quote = `"Hollywood is a place where they will pay you a thousand
                dollars for a kiss and fifty cents for your soul"`
const credits = `~ Quoted in Marilyn Monroe in Her OwnWords (1990)`

const Quote = () => {
    const { textColor, mainThemeColor } = useContext(ThemeContext)
    return (
        <Parallax opacity={[0, 1.5]}>
            <Typography color={textColor} sx={quoteStyles(mainThemeColor)}>
                <Typography>{quote}</Typography>

                <span style={creditsStyles}>{credits}</span>
            </Typography>
        </Parallax>
    )
}

export default Quote

/* --------------------------------- STYLES --------------------------------- */
const quoteStyles = (mainThemeColor: string) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        fontSize: {
            xs: '1rem',
            sm: '1rem',
            md: '1.1rem',
            lg: '1.3rem',
        },
        width: { xs: '77%', sm: '70%', md: '60%', lg: '57%' },
        margin: '1.25rem auto',
        textAlign: 'center',
        transition: 'background 0.25s, color 0.25s',
        '&:hover': {
            backgroundColor: 'transparent',
            color: mainThemeColor,
        },
        marginTop: '5rem',
    }
}

const creditsStyles = {
    fontStyle: 'italic',
    margin: '3',
    color: 'gray',
    fontSize: '0.7em',
    display: 'block',
}
