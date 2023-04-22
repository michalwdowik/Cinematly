import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    Move,
    Sticky,
} from 'react-scroll-motion'
import { Typography } from '@mui/material'
// import Footer from '../Footer'
// import Home from './Home'
// import List from '../List'

const NotFound = () => {
    // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky())
    return (
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={FadeUp}>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '18px',
                                sm: '20px',
                                md: '25px',
                                lg: '30px',
                            },
                            width: {
                                xs: '77%',
                                sm: '70%',
                                md: '60%',
                                lg: '50%',
                            },
                            margin: '20px auto',
                            textAlign: 'center',
                            color: 'white',
                            transition: 'background 0.25s, color 0.25s',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: '#fc9803',
                            },
                        }}
                        variant="h5"
                    >
                        &quot; Hollywood is a place where they will pay you a
                        thousand dollars for a kiss and fifty cents for your
                        soul &ldquo;
                        <Typography
                            sx={{
                                fontStyle: 'italic',
                                margin: 3,
                                color: 'gray',
                                fontSize: { xs: '12px', md: '16px' },
                            }}
                            variant="subtitle2"
                        >
                            ~ Quoted in Marilyn Monroe in Her OwnWords (1990)
                        </Typography>
                    </Typography>
                    {/* <span style={{ fontSize: '40px' }}>I'm FadeUp ⛅️</span> */}
                </Animator>
            </ScrollPage>
            {/* <Home/> */}

            {/* <List /> */}
            {/* <ScrollPage>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <span style={{ fontSize: '40px' }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage> */}
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky())}>
                    {/* <span style={{ fontSize: '40px' }}>Done</span> */}
                    {/* <br /> */}
                    {/* <Footer /> */}
                    {/* <span style={{ fontSize: '30px', color: 'white' }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span> */}
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}

export default NotFound
