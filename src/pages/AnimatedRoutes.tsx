import { Routes, Route, useLocation } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import TopRated from './TopRated'
import Upcoming from './Upcoming'
import NotFound from './NotFound'
// import ScrollToTop from '../Helpers/ScrollToTop'
const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <div>
            {/* <AnimatePresence> */}
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Home />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* </AnimatePresence> */}
        </div>
    )
}

export default AnimatedRoutes
