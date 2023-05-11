import { Link } from 'react-router-dom'
import CinematlyLogo from '@mui/icons-material/Animation'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const WebsiteLogo = ({ navbarLogo }: WebsiteLogoProps) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Link to="/" aria-label="Cinematly Home Button">
            <CinematlyLogo
                sx={{
                    fontSize: '55px',
                    color: navbarLogo ? 'white' : textColor,
                }}
            />
        </Link>
    )
}

export default WebsiteLogo

/* --------------------------------- TYPES --------------------------------- */
type WebsiteLogoProps = {
    navbarLogo: boolean
}
