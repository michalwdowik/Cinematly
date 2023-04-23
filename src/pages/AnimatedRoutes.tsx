import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import TopRated from './TopRated'
import Upcoming from './Upcoming'
import Testowanie from './Testowanie'

const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <div>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Home />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/upcoming" element={<Upcoming />} />
                {/* <Route path="/upcoming" element={<Upcoming />} /> */}
                {/* <Route path="/upcoming/:id" element={<TrendingMovies />} /> */}
                {/* <Route path="/:id" element={<Store />} />
                <Route path="/upcoming" element={<h1>upcoming</h1>} />
                <Route path="/favourites" element={<h1>favourites</h1>} />
                <Route path="/toprated" element={<h1>toprated</h1>} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    )
}

export default AnimatedRoutes
