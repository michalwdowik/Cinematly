import { CSSProperties, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ThemeContext } from '../Components/ThemeContext'

const NotFound = () => {
    const { textColor, mainThemeColor } = useContext(ThemeContext)
    return (
        <div style={notFoundPageStyles(textColor)}>
            <NotFoundImage />
            <NotFoundMessage mainThemeColor={mainThemeColor} />
        </div>
    )
}

export default NotFound

const NotFoundImage = () => {
    return (
        <img
            src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
            alt="Error 404"
            style={notFoundImageStyles}
        />
    )
}

const NotFoundMessage = ({ mainThemeColor }: NotFoundMessageProps) => {
    return (
        <>
            <Typography sx={notFoundMessageHeadingStyles}>
                Page Not Found
            </Typography>
            <p>Oops! Looks like you have stumbled upon an unknown path.</p>
            <Link to="/" style={{ color: mainThemeColor }}>
                Go to Home
            </Link>
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

const notFoundImageStyles = {
    width: '300px',
    height: '300px',
    marginBottom: '20px',
}

const notFoundMessageHeadingStyles = { fontSize: '2rem', fontWeight: 'bold' }

/* --------------------------------- TYPES --------------------------------- */

type NotFoundMessageProps = {
    mainThemeColor: string
}
