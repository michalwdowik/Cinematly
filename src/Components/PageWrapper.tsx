import { motion } from 'framer-motion'

const PageWrapper = ({ children }: PageWrapperType) => {
    return (
        <motion.div
            className="container text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper

type PageWrapperType = {
    children: JSX.Element
}
