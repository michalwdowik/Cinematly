import { Routes, Route, useLocation, useParams } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Home from './Home';
import List from '../List';
import Item from '../Item';
import '../home.css';
import NotFound from './NotFound';
import Footer from '../Footer';

function Store() {
  const { id } = useParams();
  const modal = document.getElementById('modal');

  return (
    <div className="containerx">
      <List selectedId={id} />

      {createPortal(id && <Item id={id} key="item" />, modal as Element)}
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
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* <NotFound /> */}
              <ParallaxProvider>
                <Parallax
                  easing="easeInCubic"
                  // speed={10}
                  // translateX={[-50, -20, 'easeInOut']}
                  // translateY={[-50, 50, 'easeInOut']}

                  // speed={58}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '40px', md: '70px' },
                      fontWeight: 'bold',
                      marginTop: '50px',
                      marginLeft: '80px',
                    }}
                  >
                    What&apos;s hot?
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
                        width: { xs: '60%', md: '33%' },
                        textAlign: 'right',
                        marginRight: '80px',
                        fontWeight: 'bold',
                      }}
                    >
                      Stay up-to-date with the latest buzz in the entertainment{' '}
                      world and find your next binge-worthy watch.
                    </Typography>
                  </Box>
                </Parallax>
              </ParallaxProvider>
              <Store />

              <motion.div
                className="progress"
                style={{ scaleX, zIndex: '1', bottom: 0 }}
              />
            </>
          }
        />
        <Route path="/:id" element={<Store />} />
        <Route path="/upcoming" element={<h1>upcoming</h1>} />
        <Route path="/favourites" element={<h1>favourites</h1>} />
        <Route path="/toprated" element={<h1>toprated</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AnimatedRoutes;
