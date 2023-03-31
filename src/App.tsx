import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import TopMovies from './pages/TopMovies';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topmovies" element={<TopMovies />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
