import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Box } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import useScrollToTop from '../Hooks/useScrollToTop'
import AnimateRoute from '../Components/AnimateRoute'
import Loader from '../Components/Loader'

const LazyTopRated = lazy(() => import('./TopRated'))
const LazyUpcoming = lazy(() => import('./Upcoming'))
const LazyNotFound = lazy(() => import('./NotFound'))

const RouteWithSuspense = ({ fallback, children }: RouteWithSuspenseProps) => (
    <Suspense fallback={fallback}>
        <AnimateRoute>{children}</AnimateRoute>
    </Suspense>
)

const AnimatedRoutes = () => {
    const location = useLocation()
    useScrollToTop()

    return (
        <AnimatePresence mode="wait">
            <Box display="flex" justifyContent="center">
                <Routes key={location.pathname} location={location}>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<Loader />}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/top-rated"
                        element={
                            <RouteWithSuspense fallback={<Loader />}>
                                <LazyTopRated />
                            </RouteWithSuspense>
                        }
                    />
                    <Route
                        path="/upcoming"
                        element={
                            <RouteWithSuspense fallback={<Loader />}>
                                <LazyUpcoming />
                            </RouteWithSuspense>
                        }
                    />
                    <Route
                        path="/*"
                        element={
                            <RouteWithSuspense fallback={<Loader />}>
                                <LazyNotFound />
                            </RouteWithSuspense>
                        }
                    />
                </Routes>
            </Box>
        </AnimatePresence>
    )
}

export default AnimatedRoutes

/* ----------------- TYPES ----------------- */
type RouteWithSuspenseProps = {
    fallback: JSX.Element
    children: JSX.Element
}
