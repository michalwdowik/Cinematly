import { BrowserRouter as Router } from 'react-router-dom'
import ThemeProvider from './Components/ThemeContext'
import NavBar from './NavBar/NavBar'
import RoutesComponent from './pages/RoutesComponent'
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
                    <RoutesComponent />
                    <WatchlistSpeedDial />
                </WatchlistContextProvider>
                <Footer />
            </ThemeProvider>
            <BottomScrollBar />
        </Router>
    )
}

export default App
