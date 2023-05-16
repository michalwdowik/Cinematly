/* eslint-disable react/jsx-no-useless-fragment */
import { CSSProperties, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ThemeContext } from '../Components/ThemeContext'
import {
    NotFoundImageSkeleton,
    NotFoundMessageSkeleton,
    notFoundContainerStyles,
} from '../Skeletons/NotFoundSkeleton'

const NotFound = () => {
    const { textColor, mainThemeColor } = useContext(ThemeContext)
    const [loaded, setLoaded] = useState(false)
    const onLoad = () => {
        setLoaded(true)
    }
    return (
        <>
            <div style={notFoundPageStyles(textColor)}>
                <NotFoundImage loaded={loaded} onLoad={onLoad} />
                <NotFoundMessage
                    loaded={loaded}
                    mainThemeColor={mainThemeColor}
                />
            </div>
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
                style={notFoundImageStyles(loaded)}
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
                <div style={notFoundContainerStyles}>
                    <Typography sx={notFoundMessageHeadingStyles}>
                        Page Not Found
                    </Typography>
                    <p style={{ margin: '0' }}>
                        Oops! Looks like you have stumbled upon an unknown path.
                    </p>
                    <Link to="/" style={{ color: mainThemeColor }}>
                        Go to Home
                    </Link>
                </div>
            ) : (
                <NotFoundMessageSkeleton />
            )}
        </>
    )
}

/* --------------------------------- STYLES --------------------------------- */

const notFoundPageStyles = (textColor: string): CSSProperties => {
    return {
        textAlign: 'center',
        marginTop: '0',
        color: textColor,
    }
}

const notFoundImageStyles = (loaded: boolean) => {
    return {
        display: loaded ? '' : 'none',
        width: '300px',
        height: '300px',
    }
}

const notFoundMessageHeadingStyles = { fontSize: '2rem', fontWeight: 'bold' }

/* --------------------------------- TYPES --------------------------------- */
type NotFoundMessageProps = {
    mainThemeColor: string
    loaded: boolean
}
