import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Home from '@mui/icons-material/Home'
import Search from '@mui/icons-material/Search'
import { ReactNode } from 'react'

const pages: Pages = {
    HOME: {
        label: 0,
        name: 'HOME',
        icon: <Home />,
        link: '/',
    },
    SEARCH: {
        label: 1,
        name: 'SEARCH',
        icon: <Search />,
        link: '/',
    },
    UPCOMING: {
        label: 2,
        name: 'UPCOMING',
        icon: <AccessTimeIcon />,
        link: '/upcoming',
    },
    TOPRATED: {
        label: 3,
        name: 'TOP RATED',
        icon: <EmojiEventsIcon />,
        link: '/top-rated',
    },
}

export const websitePages = Object.values(pages)

/* --------------------------------- TYPES --------------------------------- */
export type Page = {
    label: number
    icon: ReactNode
    link: string
    name: string
}

type Pages = {
    [key: string]: Page
}
