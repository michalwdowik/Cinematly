import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './NavBar/NavBar'
import AnimatedRoutes from './pages/AnimatedRoutes'
import Footer from './Footer/Footer'
import BottomScroll from './Components/BottomScroll'
import { WatchlistContextProvider } from './Watchlist/WatchlistContext'
import ThemeProvider from './Components/ThemeContext'
import WatchlistSpeedDial from './Watchlist/WatchlistSpeedDial'

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <WatchlistContextProvider>
                    <NavBar />
                    <WatchlistSpeedDial />
                    <Box sx={appBoxStyles}>
                        <AnimatedRoutes />
                    </Box>
                </WatchlistContextProvider>
                <Footer />
                <BottomScroll />
            </ThemeProvider>
        </Router>
    )
}

export default App

/* --------------------------------- STYLES --------------------------------- */
const appBoxStyles = {
    position: 'relative',
    minHeight: '100vh',
    height: '100%',
}
