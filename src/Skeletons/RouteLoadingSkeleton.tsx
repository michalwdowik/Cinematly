import { Box } from '@mui/material'
import React, { useContext } from 'react'
import ContentLoader from 'react-content-loader'
import { ThemeContext } from '../Contexts/ThemeContext'

const RouteLoadingSkeleton = () => {
    const { mainThemeColor } = useContext(ThemeContext)
    return (
        <Box sx={routeLoadingSkeletonStyles}>
            <ContentLoader
                viewBox="0 0 400 160"
                height={160}
                width={400}
                backgroundColor={mainThemeColor}
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>
        </Box>
    )
}

export default RouteLoadingSkeleton

/* --------------------------------- STYLES --------------------------------- */
const routeLoadingSkeletonStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}
