import { Typography } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { useContext } from 'react'
import { creditsSx, quoteSx } from '../ComponentStyles/QuoteStyles'
import { ThemeContext } from './ThemeContext'

const quote = `"Hollywood is a place where they will pay you a thousand
                dollars for a kiss and fifty cents for your soul"`
const credits = `~ Quoted in Marilyn Monroe in Her OwnWords (1990)`

const Quote = () => {
    const { textColor } = useContext(ThemeContext)
    return (
        <Parallax opacity={[0, 1.5]}>
            <Typography color={textColor} sx={quoteSx} variant="h5">
                {quote}
                <Typography sx={creditsSx} variant="subtitle2">
                    {credits}
                </Typography>
            </Typography>
        </Parallax>
    )
}

export default Quote
