/* eslint-disable no-plusplus */
import { a } from '@react-spring/web'
import StarIcon from '@mui/icons-material/Star'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import InfiniteSlider from './InfiniteSlider'
// import { itemki } from './items.js'
import { famousPeople } from '../Data'
import styles from '../Styles/styles.module.css'
import SectionHeading from '../SectionHeading'

const TrendingActors = () => (
    <div>
        <ParallaxProvider>
            <Parallax easing="easeInCubic" />
            <SectionHeading
                leftAligned={false}
                heading=" Trending Actors"
                subheading="From Blockbuster Hits to Indie Gems, Our Trending Actors
                    Section Covers It All - Don't Miss Out on the Latest
                    Scoop!"
            />
        </ParallaxProvider>

        <div className={`flex fill center ${styles.container}`}>
            <div className={styles.main}>
                <InfiniteSlider items={famousPeople} width={600} visible={3}>
                    {({
                        profile_path,
                        name,
                        vote_average,
                        overview,
                        known_for,
                    }) => (
                        <div className={styles.content}>
                            <div className={styles.marker}>{name}</div>
                            <div style={{ color: 'white' }}>
                                <span>
                                    <StarIcon sx={{ fontSize: '14px' }} />
                                    {vote_average}
                                </span>
                            </div>
                            <div
                                style={{
                                    color: '#fc7b03',
                                    fontWeight: 'bold',
                                }}
                            >
                                {known_for}
                            </div>
                            <div style={{ color: 'white' }}>
                                {cutText(overview)}
                            </div>
                            <a.div
                                className={styles.image}
                                style={{
                                    borderRadius: '50px',
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${profile_path})`,
                                }}
                            />
                        </div>
                    )}
                </InfiniteSlider>
            </div>
        </div>
    </div>
)

const cutText = (text: string) => {
    const words = text.trim().split(' ')
    let maxWords = 25

    if (words.length <= maxWords) {
        return text
    }

    let truncatedText = words.slice(0, maxWords).join(' ')

    while (truncatedText.slice(-1) !== '.' && words.length > maxWords) {
        truncatedText += ` ${words[maxWords]}`
        maxWords++
    }

    return truncatedText
}

export default TrendingActors
