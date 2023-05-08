/* eslint-disable react/no-children-prop */
import { useRef, useCallback } from 'react'
import { a, useSprings, SpringValue } from '@react-spring/web'
import { v4 as uuid } from 'uuid'
import { Box } from '@mui/material'
import useDragInfiniteSlider from '../Hooks/useDragInfiniteSlider'
import { Actor } from '../TrendingActors/types'

const InfiniteSlider = ({
    actors,
    width = 600,
    visible = 4,
    children,
}: InfiniteSliderProps) => {
    const idx = useCallback(
        (x: number, l = actors.length) => (x < 0 ? x + l : x) % l,
        [actors]
    )
    const getPos = useCallback(
        (i: number, firstVis: number, firstVisIdx: number) =>
            idx(i - firstVis + firstVisIdx),
        [idx]
    )
    const [springs, api] = useSprings(actors.length, (i) => ({
        x: (i < actors.length - 1 ? i : -1) * width,
    }))
    const prev = useRef([0, 1])
    const target = useRef<HTMLDivElement>(null)

    const runSprings = useCallback(
        (y: number, dy: number) => {
            const firstVis = idx(Math.floor(y / width) % actors.length)
            const firstVisIdx = dy < 0 ? actors.length - visible - 1 : 1
            api.start((i) => {
                const position = getPos(i, firstVis, firstVisIdx)
                const prevPosition = getPos(i, prev.current[0], prev.current[1])
                const rank =
                    firstVis -
                    (y < 0 ? actors.length : 0) +
                    position -
                    firstVisIdx
                const configPos = dy > 0 ? position : actors.length - position
                return {
                    x: (-y % (width * actors.length)) + width * rank,
                    immediate:
                        dy < 0
                            ? prevPosition > position
                            : prevPosition < position,
                    config: {
                        tension: (1 + actors.length - configPos) * 100,
                        friction: 30 + configPos * 40,
                    },
                }
            })
            prev.current = [firstVis, firstVisIdx]
        },
        [idx, getPos, width, visible, api, actors.length]
    )

    useDragInfiniteSlider({ runSprings, target })

    return (
        <Box ref={target} sx={infiniteSliderStyles}>
            {springs.map(({ x }, i) => (
                <Box
                    component={a.div}
                    key={uuid()}
                    style={springStyle(x)}
                    children={children(actors[i])}
                />
            ))}
        </Box>
    )
}
export default InfiniteSlider

const infiniteSliderStyles = {
    position: 'relative',
    height: '100%',
    width: '100%',
    touchAction: 'none',
}

const springStyle = (x: SpringValue<number>) => ({
    position: 'absolute' as const,
    height: '100%',
    willChange: 'transform',
    width: 600,
    x,
})

type InfiniteSliderProps = {
    actors: Actor[]
    width: number
    visible: number
    children: (item: Actor) => React.ReactNode
}
