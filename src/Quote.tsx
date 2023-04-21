import { Typography } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { creditsSx, quoteSx } from './ComponentStyles/QuoteStyles'

const quote = `"Hollywood is a place where they will pay you a thousand
                dollars for a kiss and fifty cents for your soul"`
const credits = `~ Quoted in Marilyn Monroe in Her OwnWords (1990)`

const Quote = () => (
    <Parallax opacity={[0, 1.5]}>
        <Typography sx={quoteSx} variant="h5">
            {quote}
            <Typography sx={creditsSx} variant="subtitle2">
                {credits}
            </Typography>
        </Typography>
    </Parallax>
)

export default Quote
