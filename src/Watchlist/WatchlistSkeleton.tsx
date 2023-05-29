import { Skeleton } from '@mui/material'

/* ----------------------- SKELETON ----------------------- */
export const WatchlistMovieDetailsSkeleton = () => {
    return (
        <>
            <WatchlistMovieImageSkeleton />
            <WatchlistMovieTitleSkeleton />
            <WatchlistMovieReleaseDateSkeleton />
        </>
    )
}

export const WatchlistMovieOverviewSkeleton = () => {
    return (
        <div className="watchlist-movie-overview">
            <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} width={240} />
            <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} width={180} />
            <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} width={100} />
        </div>
    )
}

const WatchlistMovieImageSkeleton = () => {
    return (
        <Skeleton
            variant="rounded"
            sx={{ borderRadius: '0.5rem' }}
            className="watchlist-movie-image"
            width={120}
            height={68}
        />
    )
}

const WatchlistMovieTitleSkeleton = () => {
    return (
        <>
            <Skeleton variant="text" height={12} />
            <Skeleton variant="text" height={12} width={90} />
        </>
    )
}

const WatchlistMovieReleaseDateSkeleton = () => {
    return (
        <Skeleton
            variant="text"
            width={60}
            height={8}
            sx={{ marginTop: '0.4rem' }}
        />
    )
}
