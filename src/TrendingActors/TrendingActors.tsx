import { Box } from '@mui/material'
import InfiniteSlider from '../Components/InfiniteSlider'
import trendingActors from '../Helpers/fetchTrendingActors'
import ActorDetails from './ActorDetails'
import { trendingActorsBoxSx } from '../ComponentStyles/TrendingActorsStyles'

const TrendingActors = () => (
    <Box sx={trendingActorsBoxSx}>
        <InfiniteSlider actors={trendingActors} width={600} visible={3}>
            {({ profile_path, name, vote_average, known_for, overview }) => (
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

export default TrendingActors
