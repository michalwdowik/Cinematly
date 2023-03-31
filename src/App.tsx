import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import AnimatedRoutes from './pages/AnimatedRoutes';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TopMovies from './pages/TopMovies';
import Trending from './pages/Trending';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    // <>
    <Router>
      {/* <Routes> */}
      <NavBar />
      <AnimatedRoutes />
    </Router>
    /* <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/topmovies" element={<TopMovies />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<NotFound />} /> */
    /* </Routes> */
    // </>
  );
}

export default App;
