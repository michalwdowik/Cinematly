import { Routes, Route, useLocation, useParams } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import { createPortal } from 'react-dom';
import Home from './Home';
import List from '../List';
import Item from '../Item';
import '../home.css';

function Store() {
  const { id } = useParams();
  const modal = document.getElementById('modal');

  return (
    <div className="containerx">
      <List selectedId={id} />
      {createPortal(id && <Item id={id} key="item" />, modal)}
    </div>
  );
}
function AnimatedRoutes() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      {/* <AnimatePresence mode="mount"> */}
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Typography
                variant="h1"
                sx={{
                  fontSize: '70px',
                  fontWeight: 'bold',
                  marginTop: '50px',
                  marginLeft: '80px',
                }}
              >
                What's hot?
              </Typography>
              <Box
                sx={{
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,169,0,1) 90%)',
                  height: '3px',
                  marginLeft: '80px',
                  marginRight: '80px',
                  marginBottom: '5px',
                  marginTop: '5px',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'right',
                  marginBottom: '50px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#fc9803',
                    fontSize: { xs: '12px', md: '15px' },
                    width: { xs: '50%', md: '33%' },
                    textAlign: 'right',
                    marginRight: '80px',
                    fontWeight: 'bold',
                  }}
                >
                  Stay up-to-date with the latest buzz in the entertainment{' '}
                  world and find your next binge-worthy watch.
                </Typography>
              </Box>
              <Store />
              <motion.div className="progress" style={{ scaleX }} />
            </>
          }
        />
        <Route path="/:id" element={<Store />} />

        <Route path="/topmovies/" element={<h1>Soon</h1>} />
      </Routes>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default AnimatedRoutes;
