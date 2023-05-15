import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Box } from '@mui/material'
import { websitePages } from '../Helpers/pages'
import { ThemeContext } from '../Components/ThemeContext'

const FooterMenu = () => {
    const { textColor, mainThemeColor } = useContext(ThemeContext)

    return (
        <Box sx={footerMenuStyles}>
            {websitePages.map((page) => {
                const searchPage = page.name === 'SEARCH'
                return (
                    !searchPage && (
                        <Button
                            key={page.link}
                            sx={{
                                color: textColor,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: mainThemeColor,
                                    opacity: 0.5,
                                },
                            }}
                            to={page.link}
                            component={Link}
                        >
                            {page.name}
                        </Button>
                    )
                )
            })}
        </Box>
    )
}
export default FooterMenu

/* --------------------------------- STYLES --------------------------------- */
const footerMenuStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '35px',
    gap: { xs: '25px', md: '90px' },
}
