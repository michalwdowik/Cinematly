import axios from 'axios'
import { Actor } from '../TrendingActors/types'

const API_KEY = import.meta.env.VITE_API_KEY

const fetchActors = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    const { data } = response

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
