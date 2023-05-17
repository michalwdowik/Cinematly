import { Routes, Route, useLocation } from 'react-router-dom'
import React, { lazy, Suspense, useContext } from 'react'
import { Box } from '@mui/material'
import ContentLoader from 'react-content-loader'
import Home from './Home'

import { ThemeContext } from '../Contexts/ThemeContext'

const LazyTopRated = lazy(() => import('./TopRated'))
const LazyUpcoming = lazy(() => import('./Upcoming'))
const LazyNotFound = lazy(() => import('./NotFound'))

const AllRoutes = () => {
    const location = useLocation()

    return (
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
                <Route path="/:id" element={<Home />} />
                <Route
                    path="/error404/*"
                    element={
                        <Suspense fallback={<RouteLoadingSkeleton />}>
                            <LazyNotFound />
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
    )
}

export default AllRoutes

const RouteLoadingSkeleton = () => {
    const { mainThemeColor } = useContext(ThemeContext)
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
