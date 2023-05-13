import { memo } from 'react'
import { Box } from '@mui/material'
import InfiniteSlider from '../Components/InfiniteSlider'
import ActorDetails from './ActorDetails'
import { trendingActors } from '../Helpers/fetchActors'

const TrendingActors = () => {
    return (
        <Box sx={trendingActorsStyles}>
            <InfiniteSlider actors={trendingActors} width={600} visible={3}>
                {({
                    profile_path,
                    name,
                    vote_average,
                    known_for,
                    overview,
                }) => (
                    <ActorDetails
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

const MemoizedTrendingActors = memo(TrendingActors)

export default MemoizedTrendingActors

/* --------------------------------- STYLES --------------------------------- */
const trendingActorsStyles = {
    background: 'transparent',
    height: '400px',
    width: '100%',
    marginBottom: '200px',
    marginTop: '-20px',
}
