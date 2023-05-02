import HomeIcon from '@mui/icons-material/Home'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { Page } from '../types/NavbarTypes'

type Pages = {
    [key: string]: Page
}

const pages: Pages = {
    Home: {
        label: 'Home',
        icon: <HomeIcon />,
        link: '/',
    },
    Upcoming: {
        label: 'Upcoming',
        icon: <AccessTimeIcon />,
        link: '/upcoming',
    },
    'Top Rated': {
        label: 'Top Rated',
        icon: <EmojiEventsIcon />,
        link: '/top-rated',
    },
}

export default pages
