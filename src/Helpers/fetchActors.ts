import { Actor } from '../TrendingActors/types'
import { API_KEY } from './fetchMovies'

const fetchActors = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    const data = await response.json()

    return data.results.slice(0, 10).map((actor: Actor) => ({
        name: actor.name,
        vote_average: actor.known_for[0].vote_average,
        known_for: actor.known_for,
        overview: actor.known_for[0].overview,
        profile_path: actor.profile_path,
    }))
}

export default fetchActors

export const trendingActors = await fetchActors()
