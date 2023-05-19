import { ActorType } from './types'
import ActorDetails from './ActorDetails'

const Actor = ({
    name,
    vote_average,
    known_for,
    overview,
    profile_path,
}: ActorType) => {
    return (
        <ActorDetails
            name={name}
            vote_average={vote_average}
            known_for={known_for}
            overview={overview}
            profile_path={profile_path}
        />
    )
}

export default Actor
