import { Link } from 'react-router-dom'
import CinematlyLogo from '@mui/icons-material/Animation'

const WebsiteLogo = () => {
    return (
        <Link to="/">
            <CinematlyLogo
                sx={{
                    fontSize: '55px',
                    color: 'white',
                }}
            />
        </Link>
    )
}

export default WebsiteLogo
