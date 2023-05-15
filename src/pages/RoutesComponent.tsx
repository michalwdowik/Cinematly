import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './Home'
import RouteLoadingPlaceholder from '../Skeletons/RouteLoadingPlaceholder'

const LazyTopRated = lazy(() => import('./TopRated'))
const LazyUpcoming = lazy(() => import('./Upcoming'))
const LazyNotFound = lazy(() => import('./NotFound'))

const RoutesComponent = () => {
    const location = useLocation()

    return (
        <div>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route
                    path="/top-rated"
                    element={
                        <Suspense fallback={<RouteLoadingPlaceholder />}>
                            <LazyTopRated />
                        </Suspense>
                    }
                />
                <Route
                    path="/upcoming"
                    element={
                        <Suspense fallback={<RouteLoadingPlaceholder />}>
                            <LazyUpcoming />
                        </Suspense>
                    }
                />
                <Route path="/:id" element={<Home />} />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<RouteLoadingPlaceholder />}>
                            <LazyNotFound />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    )
}

export default RoutesComponent
