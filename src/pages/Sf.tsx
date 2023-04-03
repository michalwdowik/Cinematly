import React from 'react';
import { a } from '@react-spring/web';
import StarIcon from '@mui/icons-material/Star';
import InfiniteSlider from './InfiniteSlider';
import { itemki } from './items.js';
import { famousPeople } from '../Data';

import styles from './styles.module.css';

export default function Sf() {
  return (
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
