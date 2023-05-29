import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Box } from '@mui/material'
import { websitePages } from '../Helpers/pages'
import { ThemeContext } from '../Contexts/ThemeContext'

const FooterMenu = () => {
    const { textColor } = useContext(ThemeContext)

    return (
        <Box className="footer-menu">
            {websitePages.map((page) => {
                const searchPage = page.name === 'SEARCH'
                return (
                    !searchPage && (
                        <Box
                            key={page.link}
                            className="footer-menu-button"
                            color={textColor}
                            to={page.link}
                            component={Link}
                        >
                            {page.name}
                        </Box>
                    )
                )
            })}
        </Box>
    )
}
export default FooterMenu
