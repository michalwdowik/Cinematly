import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Home from './Home'
import List from '../List'
import Item from '../Item'
import NotFound from './NotFound'
import SectionHeading from '../Components/SectionHeading'

const Store = () => {
    const { id } = useParams()
    const modal = document.getElementById('modal')

    return (
        <div className="containerx">
            <List />
            {id && modal && createPortal(<Item id={id} />, modal)}
        </div>
    )
}
const AnimatedRoutes = () => {
    const location = useLocation()
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return (
        <div>
            <Routes key={location.pathname} location={location}>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <ParallaxProvider>
                                <Parallax easing="easeInCubic">
                                    <SectionHeading
                                        leftAligned
                                        heading="What's hot?"
                                        subheading="Stay up-to-date with the latest buzz in the entertainment world and find your next binge-worthy watch."
                                    />
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
    )
}

export default AnimatedRoutes
