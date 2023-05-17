import { Box } from '@mui/material'
import { ReactNode } from 'react'

const MovieCarouselOverlay = ({ children }: CarouselOverlayProps) => {
    return <Box className="carouselMovieOverlay">{children}</Box>
}

export default MovieCarouselOverlay

/* --------------------------------- TYPES --------------------------------- */
type CarouselOverlayProps = {
    children: ReactNode
}
