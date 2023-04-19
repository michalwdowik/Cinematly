import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Home from './Home'
import List from '../List'
import Item from '../Item'

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

    return (
        <div>
            <Routes key={location.pathname} location={location}>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            {/* <Store /> */}
                        </>
                    }
                />
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
