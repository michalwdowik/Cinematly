import { Link } from 'react-router-dom'
import CinematlyLogo from '@mui/icons-material/Animation'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

const WebsiteLogo = ({ navbarLogo }: WebsiteLogoProps) => {
    const { textColor } = useContext(ThemeContext)
    const color = navbarLogo ? 'white' : textColor
    return (
        <Link to="/" aria-label="Cinematly Home Button">
            <CinematlyLogo sx={{ fontSize: '3.438rem', color }} />
        </Link>
    )
}

export default WebsiteLogo

/* --------------------------------- TYPES --------------------------------- */
type WebsiteLogoProps = {
    navbarLogo: boolean
}
