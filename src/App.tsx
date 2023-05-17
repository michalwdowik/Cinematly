import { BrowserRouter as Router } from 'react-router-dom'
import ThemeProvider from './Contexts/ThemeContext'
import NavBar from './NavBar/NavBar'
import AllRoutes from './pages/AllRoutes'
import Footer from './Footer/Footer'
import BottomScrollBar from './Components/BottomScrollBar'
import { WatchlistContextProvider } from './Watchlist/WatchlistContext'
import WatchlistSpeedDial from './Watchlist/WatchlistSpeedDial'

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <WatchlistContextProvider>
                    <NavBar />
                    <AllRoutes />
                    <WatchlistSpeedDial />
                </WatchlistContextProvider>
                <Footer />
            </ThemeProvider>
            <BottomScrollBar />
        </Router>
    )
}

export default App
