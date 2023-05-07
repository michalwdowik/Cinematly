import { Box, Typography } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { ReactNode } from 'react'
import WebsiteLogo from '../Components/WebsiteLogo'

import FooterMenu from './FooterMenu'

const Footer = () => (
    <ParallaxProvider>
        <Parallax shouldAlwaysCompleteAnimation opacity={[0, 1, 'easeInOut']}>
            <FooterWrapper>
                <WebsiteLogo navbarLogo={false} />
                <FooterMenu />
                <FooterCopyright />
            </FooterWrapper>
        </Parallax>
    </ParallaxProvider>
)
export default Footer

const FooterWrapper = ({ children }: FooterProps) => {
    return <Box sx={footerStyles}>{children}</Box>
}

const FooterCopyright = () => {
    return (
        <Typography variant="body2" sx={{ color: 'gray' }}>
            © 2023 Cinematly
        </Typography>
    )
}

const footerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '100px',
    marginBottom: '40px',
}

type FooterProps = {
    children: ReactNode
}
