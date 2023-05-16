import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './Home'
import RouteLoadingSkeleton from '../Skeletons/RouteLoadingSkeleton'

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
                        <Suspense fallback={<RouteLoadingSkeleton />}>
                            <LazyTopRated />
                        </Suspense>
                    }
                />
                <Route
                    path="/upcoming"
                    element={
                        <Suspense fallback={<RouteLoadingSkeleton />}>
                            <LazyUpcoming />
                        </Suspense>
                    }
                />
                <Route path="/:id" element={<Home />} />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<RouteLoadingSkeleton />}>
                            <LazyNotFound />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    )
}

export default RoutesComponent
