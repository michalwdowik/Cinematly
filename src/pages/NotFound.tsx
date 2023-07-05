import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton, Box } from '@mui/material'
import {
    LazyLoadComponent,
    LazyLoadImage,
} from 'react-lazy-load-image-component'
import { ThemeContext } from '../Contexts/ThemeContext'
import '../Styles/not-found-page.css'

const NotFound = () => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Box component="div" color={textColor} className="not-found-page">
            <NotFoundImage />
            <NotFoundMessage />
        </Box>
    )
}

export default NotFound

const NotFoundImage = () => {
    return (
        <LazyLoadImage
            placeholder={<NotFoundImageSkeleton />}
            src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
            alt="Error 404"
            className="not-found-image"
        />
    )
}

const NotFoundMessage = () => {
    const mainThemeColor = import.meta.env.VITE_MAIN_THEME_COLOR

    return (
        <LazyLoadComponent placeholder={<NotFoundMessageSkeleton />}>
            <Box className="not-found-container">
                <Box component="span" className="not-found-message-heading">
                    Page Not Found
                </Box>
                <p style={{ margin: '0' }}>
                    Oops! Looks like you have stumbled upon an unknown path.
                </p>
                <Link to="/" style={{ color: mainThemeColor }}>
                    Go to Homepage
                </Link>
            </Box>
        </LazyLoadComponent>
    )
}

const NotFoundImageSkeleton = () => {
    return (
        <Skeleton
            sx={{
                bgcolor: 'grey.900',
                borderRadius: '2rem',
                margin: 'auto',
            }}
            width={300}
            height={300}
            variant="rectangular"
        />
    )
}

const NotFoundMessageSkeleton = () => {
    return (
        <div className="not-found-container">
            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                }}
                width={260}
                height={50}
            />

            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                }}
                width={440}
                height={20}
            />

            <Skeleton
                sx={{
                    bgcolor: 'grey.900',
                }}
                width={70}
                height={20}
            />
        </div>
    )
}
