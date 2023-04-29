import { Movie } from '../types/MoviesTypes'

export const watchlist: Movie[] = []
export const addToWatchlist = (movie: Movie) => watchlist.push(movie)
export const removeFromWatchlist = (movie: Movie) =>
    watchlist.filter((m) => m === movie)

// context and wrap all
