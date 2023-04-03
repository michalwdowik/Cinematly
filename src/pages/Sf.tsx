import React from 'react';
import { a } from '@react-spring/web';
import StarIcon from '@mui/icons-material/Star';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Box, Typography } from '@mui/material';
import InfiniteSlider from './InfiniteSlider';
import { itemki } from './items.js';
import { famousPeople } from '../Data';

import styles from './styles.module.css';

export default function Sf() {
  return (
    <div>
      <ParallaxProvider>
        <Parallax
          easing="easeInCubic"
          // speed={10}
          // translateX={[-50, -20, 'easeInOut']}
          // translateY={[-50, 50, 'easeInOut']}

          // speed={58}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '40px', md: '70px' },
              fontWeight: 'bold',
              // marginTop: '50px',
              // marginLeft: '80px',
              textAlign: 'right',
              marginRight: '80px',
            }}
          >
            Trending Actors
          </Typography>
          <Box
            sx={{
              background:
                'linear-gradient(90deg, rgba(255,169,0,1) 0%, rgba(255,255,255,1) 90%)',
              height: '3px',
              marginLeft: '80px',
              marginRight: '80px',
              marginBottom: '5px',
              marginTop: '5px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'left',
              marginBottom: '50px',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#fc9803',
                fontSize: { xs: '12px', md: '15px' },
                width: { xs: '60%', md: '33%' },
                textAlign: 'left',
                marginLeft: '80px',
                fontWeight: 'bold',
                marginBottom: '30px',
              }}
            >
              From Blockbuster Hits to Indie Gems, Our Trending Actors Section
              Covers It All - Don't Miss Out on the Latest Scoop!
            </Typography>
          </Box>
        </Parallax>
      </ParallaxProvider>

      <div className={`flex fill center ${styles.container}`}>
        <div className={styles.main}>
          <InfiniteSlider items={famousPeople} width={600} visible={3}>
            {({ profile_path, name, vote_average, overview, known_for }, i) => (
              <div className={styles.content}>
                {/* <div className={styles.marker}>{String(i).padStart(2, '0')}</div> */}
                <div className={styles.marker}>{name}</div>
                <div style={{ color: 'white' }}>
                  <span>
                    <StarIcon sx={{ fontSize: '14px' }} />
                    {vote_average}
                  </span>
                </div>
                <div style={{ color: '#fc7b03', fontWeight: 'bold' }}>
                  {known_for}
                </div>
                <div style={{ color: 'white' }}>{cutText(overview)}</div>
                <a.div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${profile_path})`,
                  }}
                />
              </div>
            )}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
}
function cutText(text) {
  const words = text.trim().split(' ');
  let maxWords = 25;

  if (words.length <= maxWords) {
    return text;
  }

  let truncatedText = words.slice(0, maxWords).join(' ');

  // If the truncated text doesn't end with a dot, keep adding words until it does
  while (truncatedText.slice(-1) !== '.' && words.length > maxWords) {
    truncatedText += ` ${words[maxWords]}`;
    maxWords++;
  }

  return truncatedText;
}
