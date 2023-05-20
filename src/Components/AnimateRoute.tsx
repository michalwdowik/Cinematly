import { motion } from 'framer-motion'

const AnimateRoute = ({ children }: PageWrapperType) => {
    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimateRoute

type PageWrapperType = {
    children: JSX.Element
}
