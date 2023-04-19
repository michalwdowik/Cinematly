export type PositionProperty =
    | 'static'
    | 'relative'
    | 'absolute'
    | 'sticky'
    | 'fixed'

export type ActorNameProps = Pick<Actor, 'name'>
export type ActorKnownForProps = Pick<Actor, 'known_for'>
export type ActorRatingProps = Pick<Actor, 'vote_average'>
export type ActorImageProps = Pick<Actor, 'profile_path'>
export type ActorRoleOverviewProps = Pick<Actor, 'overview'>

export interface Actor {
    name: string
    profile_path: string
    known_for: KnownFor[]
    vote_average: number
    overview: string
}

export interface KnownFor {
    name: string
    title: string
    overview: string
    vote_average: number
}

export type InfiniteSliderProps = {
    actors: Actor[]
    width: number
    visible: number
    style?: React.CSSProperties
    children: (item: Actor) => React.ReactNode
}
