import useScreenType from 'react-screentype-hook'

const useGetProperImageSize = (path: string | null) => {
    const screenType = useScreenType()
    const baseUrl = 'https://image.tmdb.org/t/p/'
    const backdropPath = path
    let imageSize
    if (screenType.isLargeDesktop) {
        imageSize = 'w1280'
    } else {
        imageSize = 'w780'
    }
    return `${baseUrl}${imageSize}${backdropPath}`
}

export default useGetProperImageSize
