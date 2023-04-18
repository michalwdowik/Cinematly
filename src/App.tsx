import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
import { ReactNode } from 'react'
import NavBar from './NavBar'
import AnimatedRoutes from './pages/AnimatedRoutes'
import Footer from './Footer'
import OpenIconSpeedDial from './SpeedDial'
import TrendingActors from './pages/TrendingActors'

const App = () => (
    <Router>
        <NavBar />
        <AppBox>
            <AnimatedRoutes />
            <TrendingActors />
        </AppBox>
        <Footer />
        <OpenIconSpeedDial />
    </Router>
)

export default App

type AppBoxProps = {
    children: ReactNode
}
const AppBox = ({ children }: AppBoxProps) => {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                height: '100%',
            }}
        >
            {children}
        </Box>
    )
}
