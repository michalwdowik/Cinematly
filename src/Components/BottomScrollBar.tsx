import { MotionStyle, motion, useScroll, useSpring } from 'framer-motion'

const BottomScrollBar = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            className="progress"
            style={{
                ...progressStyles,
                scaleX,
            }}
        />
    )
}

export default BottomScrollBar

/* --------------------------------- STYLES --------------------------------- */
const progressStyles: MotionStyle = {
    zIndex: '1',
    position: 'fixed',
    left: '0',
    right: '0',
    height: '0.3125rem',
    backgroundColor: 'orange',
    opacity: '60%',
    bottom: '0px',
    borderRadius: '6.25rem',
}
