import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './NavBar/NavBar'
import AnimatedRoutes from './pages/AnimatedRoutes'
import Footer from './Footer/Footer'
// import OpenIconSpeedDial from './Components/SpeedDial'
import appBoxSx from './ComponentStyles/AppStyles'
import BottomScroll from './Components/BottomScroll'

const App = () => (
    <Router>
        <NavBar />
        <Box sx={appBoxSx}>
            <AnimatedRoutes />
        </Box>
        <Footer />
        <BottomScroll />
        {/* <OpenIconSpeedDial /> */}
    </Router>
)

export default App
