import { Box, Typography } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import WebsiteLogo from '../Components/WebsiteLogo'
import { footerBoxSx } from '../ComponentStyles/FooterStyles'
import { FooterBoxProps } from '../types/FooterTypes'
import FooterMenu from './FooterMenu'

const Footer = () => (
    <ParallaxProvider>
        <Parallax shouldAlwaysCompleteAnimation opacity={[0, 1, 'easeInOut']}>
            <FooterBox>
                <WebsiteLogo navbarLogo={false} />
                <FooterMenu />
                <FooterCopyright />
            </FooterBox>
        </Parallax>
    </ParallaxProvider>
)
export default Footer

const FooterBox = ({ children }: FooterBoxProps) => {
    return <Box sx={footerBoxSx}>{children}</Box>
}

const FooterCopyright = () => {
    return (
        <Typography variant="body2" sx={{ color: 'gray' }}>
            © 2023 Cinematly
        </Typography>
    )
}
