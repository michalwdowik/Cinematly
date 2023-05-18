import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Box } from '@mui/material'
import ContentLoader from 'react-content-loader'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import useScrollToTop from '../Hooks/useScrollToTop'

const LazyTopRated = lazy(() => import('./TopRated'))
const LazyUpcoming = lazy(() => import('./Upcoming'))
const LazyNotFound = lazy(() => import('./NotFound'))

const AnimatedRoutes = () => {
    const location = useLocation()
    useScrollToTop()
    return (
        <AnimatePresence mode="wait">
            <Box display="flex" justifyContent="center">
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
                    <Route
                        path="/*"
                        element={
                            <Suspense fallback={<RouteLoadingSkeleton />}>
                                <LazyNotFound />
                            </Suspense>
                        }
                    />
                </Routes>
            </Box>
        </AnimatePresence>
    )
}

export default AnimatedRoutes

const RouteLoadingSkeleton = () => {
    const mainThemeColor = import.meta.env.VITE_MAIN_THEME_COLOR

    return (
        <ContentLoader
            viewBox="0 0 400 160"
            height="100vh"
            width="100vw"
            backgroundColor={mainThemeColor}
        >
            <circle cx="150" cy="50" r="6" />
            <circle cx="194" cy="50" r="6" />
            <circle cx="238" cy="50" r="6" />
        </ContentLoader>
    )
}
