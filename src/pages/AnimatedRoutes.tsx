import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import TopMovies from './TopMovies';
import Home from './Home';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/topmovies" element={<TopMovies />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
