import { Typography } from '@mui/material'
import { creditsSx, quoteSx } from './ComponentStyles/QuoteStyles'

const quote = `"Hollywood is a place where they will pay you a thousand
                dollars for a kiss and fifty cents for your soul"`
const credits = `~ Quoted in Marilyn Monroe in Her OwnWords (1990)`

const Quote = () => (
    <Typography sx={quoteSx} variant="h5">
        {quote}
        <Typography sx={creditsSx} variant="subtitle2">
            {credits}
        </Typography>
    </Typography>
)

export default Quote
