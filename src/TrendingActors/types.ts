export type Actor = {
    name: string
    profile_path: string
    known_for: KnownFor[]
    vote_average: number
    overview: string
}

type KnownFor = Pick<Actor, 'name' | 'overview' | 'vote_average'> & {
    title: string
}
