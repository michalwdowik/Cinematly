/* eslint-disable @typescript-eslint/no-explicit-any */
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { Page, websitePages } from '../Helpers/pages'
import Search from '../SearchedMovies/Search'
import useModalLogic from '../Hooks/useShowModal'

const DrawerList = ({ hideDrawer, isDrawerOpen }: DrawerListProps) => {
    const { showModal, closeModal, openModal } = useModalLogic()

    const onClickMethod = (pageName: string) => {
        if (pageName === 'SEARCH') openModal()
        hideDrawer()
    }
    return (
        <>
            <Drawer
                anchor="top"
                sx={{ zIndex: '9999' }}
                open={isDrawerOpen}
                onClose={hideDrawer}
                PaperProps={{ sx: { backgroundColor: '#fc9803' } }}
            >
                {websitePages.map((page) => (
                    <ListItem sx={{ padding: '0' }} key={page.name}>
                        <Tab
                            onClick={() => onClickMethod(page.name)}
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

            <Search showModal={showModal} closeModal={closeModal} />
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
    hideDrawer: () => void
    isDrawerOpen: boolean
}

type DrawerListRowProps = {
    page: Page
}
