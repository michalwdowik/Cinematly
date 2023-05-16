import { Box } from '@mui/material'
import { ReactNode } from 'react'

const MovieCarouselOverlay = ({ children }: CarouselOverlayProps) => {
    return <Box sx={carouselMovieOverlayStyles}>{children}</Box>
}

export default MovieCarouselOverlay

/* --------------------------------- STYLES --------------------------------- */
const carouselMovieOverlayStyles = {
    position: 'absolute',
    bottom: '0px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundImage: 'linear-gradient(rgb(18,18,18,0), rgb(18,18,18,1))',
    opacity: '0.9',
    transition: 'opacity 0.3s',
    padding: {
        xs: '0rem',
        sm: '3rem',
        md: '4rem',
        lg: '5rem',
    },
    ':hover': {
        opacity: '1',
    },
}

/* --------------------------------- TYPES --------------------------------- */
type CarouselOverlayProps = {
    children: ReactNode
}
