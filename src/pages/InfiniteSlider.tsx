/* eslint-disable react/no-children-prop */
import { useRef, useCallback } from 'react'
import { useGesture } from '@use-gesture/react'
import { a, useSprings } from '@react-spring/web'
import { v4 as uuid } from 'uuid'

type PositionProperty = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
const styles = {
    container: {
        position: 'relative' as PositionProperty,
        height: '100%',
        width: '100%',
        touchAction: 'none',
    },
    item: {
        position: 'absolute' as 'relative',
        height: '100%',
        willChange: 'transform',
    },
}

/**
 * Calculates a spring-physics driven infinite slider
 *
 * @param {Array} items - display items
 * @param {Function} children - render child
 * @param {number} width - fixed item with
 * @param {number} visible - number of items that muste be visible on screen
 */
type InfiniteSliderProps = {
    items: any[]
    width: number
    visible: number
    style?: React.CSSProperties // change type to React.CSSProperties
    children: (item: any) => React.ReactNode
}
const InfiniteSlider = ({
    items,
    width = 600,
    visible = 4,
    style,
    children,
}: InfiniteSliderProps) => {
    const idx = useCallback(
        (x: number, l = items.length) => (x < 0 ? x + l : x) % l,
        [items]
    )
    const getPos = useCallback(
        (i: number, firstVis: number, firstVisIdx: number) =>
            idx(i - firstVis + firstVisIdx),
        [idx]
    )
    const [springs, api] = useSprings(items.length, (i) => ({
        x: (i < items.length - 1 ? i : -1) * width,
    }))
    const prev = useRef([0, 1])
    const target = useRef<HTMLDivElement>(null)

    const runSprings = useCallback(
        (y: number, dy: number) => {
            const firstVis = idx(Math.floor(y / width) % items.length)
            const firstVisIdx = dy < 0 ? items.length - visible - 1 : 1
            api.start((i) => {
                const position = getPos(i, firstVis, firstVisIdx)
                const prevPosition = getPos(i, prev.current[0], prev.current[1])
                const rank =
                    firstVis -
                    (y < 0 ? items.length : 0) +
                    position -
                    firstVisIdx
                const configPos = dy > 0 ? position : items.length - position
                return {
                    x: (-y % (width * items.length)) + width * rank,
                    immediate:
                        dy < 0
                            ? prevPosition > position
                            : prevPosition < position,
                    config: {
                        tension: (1 + items.length - configPos) * 100,
                        friction: 30 + configPos * 40,
                    },
                }
            })
            prev.current = [firstVis, firstVisIdx]
        },
        [idx, getPos, width, visible, api, items.length]
    )

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

    return (
        <div ref={target} style={{ ...style, ...styles.container }}>
            {springs.map(({ x }, i) => (
                <a.div
                    key={uuid().toString()}
                    style={{ ...styles.item, width, x }}
                    children={children(items[i])}
                />
            ))}
        </div>
    )
}
export default InfiniteSlider
