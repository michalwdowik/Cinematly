import { Link } from 'react-router-dom'
import CinematlyLogo from '@mui/icons-material/Animation'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const WebsiteLogo = ({ navbarLogo }: WebsiteLogoProps) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Link to="/" aria-label="Cinematly Home Button">
            <CinematlyLogo sx={logoStyles(textColor, navbarLogo)} />
        </Link>
    )
}

export default WebsiteLogo

/* --------------------------------- TYPES --------------------------------- */
type WebsiteLogoProps = {
    navbarLogo: boolean
}

/* --------------------------------- STYLES --------------------------------- */
const logoStyles = (textColor: string, navbarLogo: boolean) => {
    return {
        fontSize: '3.438rem',
        color: navbarLogo ? 'white' : textColor,
    }
}
