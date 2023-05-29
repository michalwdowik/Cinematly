import { Box } from '@mui/material'
import { ReactNode } from 'react'

const MovieCarouselOverlay = ({ children }: CarouselOverlayProps) => {
    return <Box className="carousel-movie-overlay">{children}</Box>
}

export default MovieCarouselOverlay

/* --------------------------------- TYPES --------------------------------- */
type CarouselOverlayProps = {
    children: ReactNode
}
