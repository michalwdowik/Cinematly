import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import AnimatedRoutes from './pages/AnimatedRoutes';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Box
        sx={{
          minHeight: '100vh',
          height: '100%',
        }}
      >
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
