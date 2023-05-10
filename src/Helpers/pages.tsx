import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { Home, Search } from '@mui/icons-material'
import { ReactNode } from 'react'

const pages: Pages = {
    HOME: {
        label: 'HOME',
        icon: <Home />,
        link: '/',
    },
    SEARCH: {
        label: 'SEARCH',
        icon: <Search />,
        link: '/',
    },
    UPCOMING: {
        label: 'UPCOMING',
        icon: <AccessTimeIcon />,
        link: '/upcoming',
    },
    TOPRATED: {
        label: 'TOP RATED',
        icon: <EmojiEventsIcon />,
        link: '/top-rated',
    },
}

export default pages

/* --------------------------------- TYPES --------------------------------- */
export type Page = {
    label: string
    icon: ReactNode
    link: string
}

type Pages = {
    [key: string]: Page
}
