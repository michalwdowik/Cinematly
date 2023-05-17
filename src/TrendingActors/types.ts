export type ActorType = {
    name: string
    profile_path: string
    known_for: KnownFor[]
    vote_average: number
    overview: string
}

type KnownFor = Pick<ActorType, 'name' | 'overview' | 'vote_average'> & {
    title: string
}

export type ActorRoleType = Pick<ActorType, 'known_for' | 'vote_average'>
export type ActorDetailsType = ActorType & { onLoad: () => void }
export type ActorNameType = Pick<ActorType, 'name'>
export type ActorKnownForType = Pick<ActorType, 'known_for'>
export type ActorRatingType = Pick<ActorType, 'vote_average'>
export type ActorImageType = Pick<ActorType, 'profile_path'> & {
    onLoad: () => void
}
export type ActorRoleOverviewType = Pick<ActorType, 'overview'>
