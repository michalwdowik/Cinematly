import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import List from '../List';
import Item from '../Item';

function Store() {
  const { id } = useParams();
  return (
    <div className="containerx">
      <List selectedId={id} />
      <AnimatePresence>{id && <Item id={id} key="item" />}</AnimatePresence>
    </div>
  );
}
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      {/* <AnimatePresence mode="wait"> */}
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/topmovies" element={<Store />} />
        <Route path="/topmovies/:id" element={<Store />} />
      </Routes>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default AnimatedRoutes;
