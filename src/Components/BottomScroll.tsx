import { motion, useScroll, useSpring } from 'framer-motion'

const BottomScroll = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return (
        <motion.div
            className="progress"
            style={{ scaleX, zIndex: '1', bottom: 0 }}
        />
    )
}

export default BottomScroll
