import { Box } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { memo } from 'react'
import InfiniteSlider from '../Components/InfiniteSlider'
import Actor from './Actor'
import useFetchActors from '../Hooks/useFetchActors'
import ActorDetailsSkeleton from './ActorDetailsSkeleton'
import '../Styles/trending-actors.css'

const ActorsInfiniteSlider = () => {
    const trendingActors = useFetchActors()
    return (
        <Box className="actors-infinite-slider">
            <InfiniteSlider actors={trendingActors} width={600} visible={3}>
                {({
                    profile_path,
                    name,
                    vote_average,
                    known_for,
                    overview,
                }) => (
                    <LazyLoadComponent placeholder={<ActorDetailsSkeleton />}>
                        <Actor
                            name={name}
                            vote_average={vote_average}
                            overview={overview}
                            known_for={known_for}
                            profile_path={profile_path}
                        />
                    </LazyLoadComponent>
                )}
            </InfiniteSlider>
        </Box>
    )
}

const MemoizedActorsInfiniteSlider = memo(ActorsInfiniteSlider)
export default MemoizedActorsInfiniteSlider
