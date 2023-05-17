import { Box } from '@mui/material'
import { memo } from 'react'
import InfiniteSlider from '../Components/InfiniteSlider'
import { trendingActors } from '../Helpers/fetchActors'
import Actor from './Actor'

const ActorsInfiniteSlider = () => {
    return (
        <Box className="actorsInfiniteSlider">
            <InfiniteSlider actors={trendingActors} width={600} visible={3}>
                {({
                    profile_path,
                    name,
                    vote_average,
                    known_for,
                    overview,
                }) => (
                    <Actor
                        name={name}
                        vote_average={vote_average}
                        overview={overview}
                        known_for={known_for}
                        profile_path={profile_path}
                    />
                )}
            </InfiniteSlider>
        </Box>
    )
}

const MemoizedActorsInfiniteSlider = memo(ActorsInfiniteSlider)

export default MemoizedActorsInfiniteSlider
