import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './NavBar/NavBar'
import AnimatedRoutes from './pages/AnimatedRoutes'
import Footer from './Footer/Footer'

import appBoxSx from './ComponentStyles/AppStyles'
import BottomScroll from './Components/BottomScroll'
import SpeedDial from './Components/SpeedDial'
import { upcomingMoviesUpToToday } from './Helpers/fetchUpcomingMovies'

const App = () => (
    <Router>
        <NavBar />
        <Box sx={appBoxSx}>
            <AnimatedRoutes />
        </Box>
        <Footer />
        <BottomScroll />
        <SpeedDial movies={upcomingMoviesUpToToday} />
    </Router>
)

export default App
