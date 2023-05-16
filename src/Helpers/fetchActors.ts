import axios from 'axios'
import createActor from './createActor'

const API_KEY = import.meta.env.VITE_API_KEY

const fetchActors = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    const { data } = response
    return data.results.slice(0, 10).map(createActor)
}

export default fetchActors

export const trendingActors = await fetchActors()
