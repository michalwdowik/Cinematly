/* eslint-disable @typescript-eslint/no-explicit-any */
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { Page, websitePages } from '../Helpers/pages'
import Search from '../pages/Search'
import useShowSearchModal from '../Hooks/useShowSearchModal'

const DrawerList = ({
    toggleDrawer,
    isDrawerOpen,
    setIsDrawerOpen,
}: DrawerListProps) => {
    const { showSearchModal, handleShowSearchModal } = useShowSearchModal()
    const hideDrawer = () => setIsDrawerOpen(false)
    return (
        <>
            <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: drawerPaperStyles }}
            >
                {websitePages.map((page) => (
                    <ListItem sx={drawerListItemStyles} key={page.name}>
                        <Tab
                            onClick={() =>
                                handleShowSearchModal(page.name, hideDrawer)
                            }
                            key={page.label}
                            label={<DrawerListRow page={page} />}
                            component={Link}
                            to={
                                page.name === 'SEARCH'
                                    ? (undefined as any)
                                    : page.link
                            }
                            sx={drawerLinkStyles}
                        />
                    </ListItem>
                ))}
            </Drawer>
            {showSearchModal && (
                <Search handleShowSearchModal={handleShowSearchModal} />
            )}
        </>
    )
}
export default DrawerList

const DrawerListRow = ({ page }: DrawerListRowProps) => {
    return (
        <Box sx={drawerListRowStyles}>
            {page.icon}
            <Typography sx={drawerListRowNameStyles} variant="body2">
                {page.name}
            </Typography>
        </Box>
    )
}
/* --------------------------------- STYLES --------------------------------- */
const drawerPaperStyles = {
    backgroundColor: '#fc9803',
}
const drawerListItemStyles = {
    padding: '0',
    margin: '0',
}
const drawerLinkStyles = {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
        opacity: 0.8,
    },
}
const drawerListRowStyles = {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
}
const drawerListRowNameStyles = { opacity: '1', color: 'white' }

/* --------------------------------- TYPES --------------------------------- */
type DrawerListProps = {
    toggleDrawer: (open: boolean) => () => void
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDrawerOpen: boolean
}

type DrawerListRowProps = {
    page: Page
}
