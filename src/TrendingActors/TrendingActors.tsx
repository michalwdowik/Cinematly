import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Box } from '@mui/material'
import InfiniteSlider from '../pages/InfiniteSlider'
import trendingActors from '../Helpers/fetchTrendingActors'
import SectionHeading from '../Components/SectionHeading'
import ActorDetails from './ActorDetails'

export const trendingActorsBoxSx = {
    background: 'transparent',
    height: '400px',
    width: '100%',
}
const TrendingActors = () => (
    <>
        <ParallaxProvider>
            <Parallax easing="easeInCubic" />
            <SectionHeading
                leftAligned={false}
                heading=" Trending Actors"
                subheading="From Blockbuster Hits to Indie Gems, Our Trending Actors
                    Section Covers It All - Don't Miss Out on the Latest
                    Scoop!"
            />
        </ParallaxProvider>

        <Box sx={trendingActorsBoxSx}>
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
    </>
)

export default TrendingActors
