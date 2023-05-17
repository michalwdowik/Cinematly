import { ActorType } from './types'
import useLoadingState from '../Hooks/useLoadingState'
import { ActorDetails } from './ActorDetails'
import ActorDetailsSkeleton from './ActorDetailsSkeleton'

const Actor = ({
    name,
    vote_average,
    known_for,
    overview,
    profile_path,
}: ActorType) => {
    const [isLoaded, onLoad] = useLoadingState()

    return isLoaded ? (
        <ActorDetails
            name={name}
            onLoad={onLoad}
            vote_average={vote_average}
            known_for={known_for}
            overview={overview}
            profile_path={profile_path}
        />
    ) : (
        <ActorDetailsSkeleton
            name={name}
            onLoad={onLoad}
            vote_average={vote_average}
            known_for={known_for}
            overview={overview}
            profile_path={profile_path}
        />
    )
}

export default Actor
