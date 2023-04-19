import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './NavBar/NavBar'
import AnimatedRoutes from './pages/AnimatedRoutes'
import Footer from './Footer/Footer'
import OpenIconSpeedDial from './Components/SpeedDial'
import TrendingActors from './TrendingActors/TrendingActors'
import appBoxSx from './ComponentStyles/AppStyles'

const App = () => (
    <Router>
        <NavBar />
        <Box sx={appBoxSx}>
            <AnimatedRoutes />
            <TrendingActors />
        </Box>
        <Footer />
        <OpenIconSpeedDial />
    </Router>
)

export default App
