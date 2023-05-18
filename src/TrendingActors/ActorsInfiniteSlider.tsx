import { Box } from '@mui/material'
import InfiniteSlider from '../Components/InfiniteSlider'
import Actor from './Actor'
import useFetchActors from '../Hooks/useFetchActors'

const ActorsInfiniteSlider = () => {
    const trendingActors = useFetchActors()
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

export default ActorsInfiniteSlider
