import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { ReactNode } from 'react'
import WebsiteLogo from './Components/WebsiteLogo'

const Footer = () => (
    <ParallaxProvider>
        <Parallax shouldAlwaysCompleteAnimation opacity={[0, 1, 'easeInOut']}>
            <FooterBox>
                <WebsiteLogo />
                <Tabs />
                <FooterCopyright />
            </FooterBox>
        </Parallax>
    </ParallaxProvider>
)
export default Footer

type FooterBoxProps = {
    children: ReactNode
}
const FooterBox = ({ children }: FooterBoxProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                marginTop: '100px',
                marginBottom: '40px',
            }}
        >
            {children}
        </Box>
    )
}

const Tabs = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: { xs: '10px', md: '90px' },
            }}
        >
            <UpcomingMoviesTab />
            <TopRatedMoviesTab />
            <FavoriteMoviesTab />
        </Box>
    )
}

const UpcomingMoviesTab = () => {
    return (
        <Button
            sx={{
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#000000',
                    opacity: 0.5,
                },
            }}
            to="/"
            component={Link}
        >
            Upcoming
        </Button>
    )
}

const TopRatedMoviesTab = () => {
    return (
        <Button
            sx={{
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#000000',
                    opacity: 0.5,
                },
            }}
            to="/"
            component={Link}
        >
            Top Rated
        </Button>
    )
}

const FavoriteMoviesTab = () => {
    return (
        <Button
            sx={{
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#000000',
                    opacity: 0.5,
                },
            }}
            to="/"
            component={Link}
        >
            Favorites
        </Button>
    )
}

const FooterCopyright = () => {
    return (
        <Typography variant="body2" sx={{ color: 'gray' }}>
            © 2023 Cinematly
        </Typography>
    )
}
