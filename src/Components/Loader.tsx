import ContentLoader from 'react-content-loader'

const Loader = ({ forElement = false }: LoaderType) => {
    const mainThemeColor = import.meta.env.VITE_MAIN_THEME_COLOR

    return (
        <ContentLoader
            viewBox="0 0 400 160"
            height="100vh"
            width="100vw"
            backgroundColor={mainThemeColor}
        >
            <circle
                cx={forElement ? '180' : '150'}
                cy="50"
                r={forElement ? '2' : '6'}
            />
            <circle cx="194" cy="50" r={forElement ? '2' : '6'} />
            <circle
                cx={forElement ? '208' : '238'}
                cy="50"
                r={forElement ? '2' : '6'}
            />
        </ContentLoader>
    )
}
export default Loader

type LoaderType = {
    forElement?: boolean
}
