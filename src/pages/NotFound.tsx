/* eslint-disable react/jsx-no-useless-fragment */
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton, Box } from '@mui/material'
import { ThemeContext } from '../Contexts/ThemeContext'

const NotFound = () => {
    const { textColor, mainThemeColor } = useContext(ThemeContext)
    const [loaded, setLoaded] = useState(false)
    const onLoad = () => {
        setLoaded(true)
    }
    return (
        <>
            <Box component="div" color={textColor} className="notFoundPage">
                <NotFoundImage loaded={loaded} onLoad={onLoad} />
                <NotFoundMessage
                    loaded={loaded}
                    mainThemeColor={mainThemeColor}
                />
            </Box>
        </>
    )
}

export default NotFound

type NotFoundImageProps = {
    loaded: boolean
    onLoad: () => void
}
const NotFoundImage = ({ loaded, onLoad }: NotFoundImageProps) => {
    return (
        <>
            <img
                src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
                alt="Error 404"
                className="notFoundImage"
                style={{ display: loaded ? '' : 'none' }}
                onLoad={onLoad}
            />
            {!loaded && <NotFoundImageSkeleton />}
        </>
    )
}

const NotFoundMessage = ({ mainThemeColor, loaded }: NotFoundMessageProps) => {
    return (
        <>
            {loaded ? (
                <div className="notFoundContainer">
                    <Box component="span" className="notFoundMessageHeading">
                        Page Not Found
                    </Box>
                    <p style={{ margin: '0' }}>
                        Oops! Looks like you have stumbled upon an unknown path.
                    </p>
                    <Link to="/" style={{ color: mainThemeColor }}>
                        Go to Homepage
                    </Link>
                </div>
            ) : (
                <NotFoundMessageSkeleton />
            )}
        </>
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
        <div className="notFoundContainer">
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

/* --------------------------------- TYPES --------------------------------- */
type NotFoundMessageProps = {
    mainThemeColor: string
    loaded: boolean
}
