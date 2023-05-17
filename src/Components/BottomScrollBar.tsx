import { motion, useScroll, useSpring } from 'framer-motion'

const BottomScrollBar = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            className="bottomScrollBar"
            style={{
                scaleX,
            }}
        />
    )
}

export default BottomScrollBar
