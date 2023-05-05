import { Link } from 'react-router-dom'
import CinematlyLogo from '@mui/icons-material/Animation'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const WebsiteLogo = ({ navbarLogo }: WebsiteLogoProps) => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Link to="/">
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

type WebsiteLogoProps = {
    navbarLogo: boolean
}
