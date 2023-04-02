import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import AnimatedRoutes from './pages/AnimatedRoutes';

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
