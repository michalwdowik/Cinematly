import { useRef } from 'react'
import { useGesture } from '@use-gesture/react'

export default function useDragInfiniteSlider({
    runSprings,
    target,
}: UseDragInfiniteSliderProps) {
    const wheelOffset = useRef(0)
    const dragOffset = useRef(0)

    useGesture(
        {
            onDrag: ({ event, offset: [x], direction: [dx] }) => {
                event.preventDefault()
                if (dx) {
                    dragOffset.current = -x
                    runSprings(wheelOffset.current + -x, -dx)
                }
            },
            onWheel: ({ event, offset: [, y], direction: [, dy] }) => {
                event.preventDefault()
                if (dy) {
                    wheelOffset.current = y
                    runSprings(dragOffset.current + y, dy)
                }
            },
        },
        { target, wheel: { eventOptions: { passive: false } } }
    )
}

/* --------------------------------- TYPES --------------------------------- */
export type UseDragInfiniteSliderProps = {
    runSprings: (y: number, dy: number) => void
    target: React.RefObject<HTMLDivElement>
}
