import Typography from '@mui/material/Typography'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { ReactNode } from 'react'
import { Box } from '@mui/material'
import WebsiteLogo from '../Components/WebsiteLogo'
import FooterMenu from './FooterMenu'
import '../Styles/footer.css'

const Footer = () => (
    <ParallaxProvider>
        <Parallax shouldAlwaysCompleteAnimation opacity={[0, 1, 'easeInOut']}>
            <FooterWrapper>
                <WebsiteLogo navbarLogo={false} />
                <FooterMenu />
                <FooterPageName />
            </FooterWrapper>
        </Parallax>
    </ParallaxProvider>
)
export default Footer

const FooterWrapper = ({ children }: FooterProps) => {
    return <Box className="footer">{children}</Box>
}

const FooterPageName = () => {
    return (
        <Typography variant="body2" sx={{ color: 'gray' }}>
            2023 Cinematly
        </Typography>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type FooterProps = {
    children: ReactNode
}
