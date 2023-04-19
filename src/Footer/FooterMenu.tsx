import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { footerMenuBoxSx, footerTabSx } from '../ComponentStyles/FooterStyles'
import pages from '../Helpers/pages'

const FooterMenu = () => {
    return (
        <Box sx={footerMenuBoxSx}>
            {Object.keys(pages).map((label) => {
                const page = pages[label]
                const isHome = label === 'Home'
                return (
                    !isHome && (
                        <Button
                            key={page.link}
                            sx={footerTabSx}
                            to={page.link}
                            component={Link}
                        >
                            {page.label}
                        </Button>
                    )
                )
            })}
        </Box>
    )
}
export default FooterMenu
