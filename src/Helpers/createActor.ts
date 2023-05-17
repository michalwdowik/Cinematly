import { ActorType } from '../TrendingActors/types'

const createActor = (actor: ActorType) => ({
    name: actor.name,
    vote_average: actor.known_for[0].vote_average,
    known_for: actor.known_for,
    overview: actor.known_for[0].overview,
    profile_path: actor.profile_path,
})

export default createActor
