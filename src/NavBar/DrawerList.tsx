/* eslint-disable @typescript-eslint/no-explicit-any */
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import { Box, List } from '@mui/material'
import { Page, websitePages } from '../Helpers/pages'
import SearchMoviesPanel from '../SearchedMovies/SearchMoviesPanel'
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
                open={isDrawerOpen}
                onClose={hideDrawer}
                PaperProps={{ sx: { backgroundColor: '#fc9803' } }}
            >
                <List component="nav" aria-label="Navigation Menu">
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
                                className="drawer-link"
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <SearchMoviesPanel showModal={showModal} closeModal={closeModal} />
        </>
    )
}
export default DrawerList

const DrawerListRow = ({ page }: DrawerListRowProps) => {
    return (
        <Box className="drawer-list-row">
            {page.icon}
            <span className="drawer-list-row-name">{page.name}</span>
        </Box>
    )
}

/* --------------------------------- TYPES --------------------------------- */
type DrawerListProps = {
    hideDrawer: () => void
    isDrawerOpen: boolean
}

type DrawerListRowProps = {
    page: Page
}
