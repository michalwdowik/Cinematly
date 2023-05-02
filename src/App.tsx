import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './NavBar/NavBar'
import AnimatedRoutes from './pages/AnimatedRoutes'
import Footer from './Footer/Footer'

import appBoxSx from './ComponentStyles/AppStyles'
import BottomScroll from './Components/BottomScroll'
import SpeedDial from './Components/SpeedDial'
import { WatchlistContextProvider } from './Helpers/Watchlist'
import ThemeModeContext from './Hooks/ThemeModeContext'

const App = () => (
    <Router>
        <ThemeModeContext>
            <WatchlistContextProvider>
                <NavBar />
                <SpeedDial />
                <Box sx={appBoxSx}>
                    <AnimatedRoutes />
                </Box>
            </WatchlistContextProvider>
            <Footer />
            <BottomScroll />
        </ThemeModeContext>
    </Router>
)

export default App
