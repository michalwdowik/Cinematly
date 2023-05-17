export type WatchlistMovieDetailsType = Omit<
    WatchlistMovieDetailsProps,
    'isLoaded'
>

export type WatchlistMovieDetailsProps = {
    isLoaded: boolean
    onLoad: () => void
    movieTitle: string
    movieReleaseDate: string
    movieBackdropPath: string | null
}

export type WatchlistMovieImageProps = {
    movieTitle: string
    movieBackdropPath: string | null
    onLoad: () => void
}

export type WatchlistMovieTitleProps = {
    movieTitle: string
}

export type WatchlistMovieReleaseDateProps = {
    movieReleaseDate: string
}
