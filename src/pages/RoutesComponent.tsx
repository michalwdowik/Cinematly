import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import TopRated from './TopRated'
import Upcoming from './Upcoming'
import NotFound from './NotFound'

const RoutesComponent = () => {
    const location = useLocation()

    return (
        <div>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Home />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/:id" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default RoutesComponent
