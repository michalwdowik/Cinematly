import { Actor } from '../types/TrendingActorsTypes'

const fetchTrendingActors = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/person/popular?api_key=48f69edf43ba636d1b1574a2cca22035&language=en-US&page=1'
    )
    const data = await response.json()

    const actors = data.results.slice(0, 10).map((actor: Actor) => ({
        name: actor.name,
        vote_average: actor.known_for[0].vote_average,
        known_for: actor.known_for,
        overview: actor.known_for[0].overview,
        profile_path: actor.profile_path,
    }))

    return actors
}

const trendingActors = await fetchTrendingActors()
export default trendingActors
