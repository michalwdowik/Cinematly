import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import NavBar from './NavBar'
import AnimatedRoutes from './pages/AnimatedRoutes'
import Footer from './Footer'
import OpenIconSpeedDial from './SpeedDial'
import Sf from './pages/Sf'
// import Checker from './pages/Checker';

const App = () => (
    <Router>
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                height: '100%',
            }}
        >
            <NavBar />
            <AnimatedRoutes />
            {/* <ParallaxProvider>
          <Parallax opacity={[0, 1]}> */}
            {/* <Checker /> */}
            {/* </Parallax> */}
            {/* </ParallaxProvider> */}
            <Sf />
            <Footer />
        </Box>
        <OpenIconSpeedDial />
    </Router>
)

export default App
