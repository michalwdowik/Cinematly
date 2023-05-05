import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { footerMenuBoxSx } from '../ComponentStyles/FooterStyles'
import pages from '../Helpers/pages'
import { ThemeContext } from '../Components/ThemeContext'

const FooterMenu = () => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Box sx={footerMenuBoxSx}>
            {Object.keys(pages).map((label) => {
                const page = pages[label]
                const isSearch = label === 'SEARCH'
                return (
                    !isSearch && (
                        <Button
                            key={page.link}
                            sx={{
                                color: textColor,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#fc9803',
                                    opacity: 0.5,
                                },
                            }}
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
