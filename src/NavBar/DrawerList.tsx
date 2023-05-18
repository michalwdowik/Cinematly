/* eslint-disable @typescript-eslint/no-explicit-any */
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { Page, websitePages } from '../Helpers/pages'
import Search from '../SearchedMovies/Search'
import useShowSearchModal from '../Hooks/useShowSearchModal'
import Portal from '../Components/Portal'

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
                PaperProps={{ sx: { backgroundColor: '#fc9803' } }}
            >
                {websitePages.map((page) => (
                    <ListItem sx={{ padding: '0' }} key={page.name}>
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
                <Portal id="searchMovie">
                    <Search handleShowSearchModal={handleShowSearchModal} />
                </Portal>
            )}
        </>
    )
}
export default DrawerList

const DrawerListRow = ({ page }: DrawerListRowProps) => {
    return (
        <Box className="drawerListRow">
            {page.icon}
            <span className="drawerListRowName">{page.name}</span>
        </Box>
    )
}
/* --------------------------------- STYLES --------------------------------- */
const drawerLinkStyles = {
    color: 'white',
    opacity: '1',
    transition: 'opacity 0.2s ease-in-out',
    textDecoration: 'none',
    '&:hover': {
        opacity: 0.4,
    },
}

/* --------------------------------- TYPES --------------------------------- */
type DrawerListProps = {
    toggleDrawer: (open: boolean) => () => void
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDrawerOpen: boolean
}

type DrawerListRowProps = {
    page: Page
}
