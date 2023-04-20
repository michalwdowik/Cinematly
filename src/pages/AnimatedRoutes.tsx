import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './oldHome'
import NewHome from './Home'

const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <div>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<NewHome />} />
                <Route path="/:id" element={<NewHome />} />
                {/* <Route path="/upcoming" element={<TrendingMovies />} /> */}
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
