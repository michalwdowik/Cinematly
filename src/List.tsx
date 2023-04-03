/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { items } from './Data';

interface CardProps {
  id: string;
  title: string;
  theme: string;
  backdrop_path: string;
  vote_average: number;
}

function Card({ id, title, theme, backdrop_path, vote_average }: CardProps) {
  return (
    <li className={`zoom-on-hover card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-image"
              src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h1>{title}</h1>
            <span style={{ display: 'flex' }} className="category">
              <StarIcon sx={{ color: 'white', fontSize: '15px' }} />
              {vote_average}
            </span>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className="card-open-link" />
    </li>
  );
}

// interface ListProps {
//   selectedId: string | undefined;
// }

export default function List() {
  return (
    <ParallaxProvider>
      <Parallax speed={58} opacity={[0, 1]} scale={[1.3, 0.2, 'easeInQuad']}>
        <ul className="card-list">
          {items.map((card: CardProps) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              theme={card.theme}
              backdrop_path={card.backdrop_path}
              vote_average={card.vote_average}
            />
          ))}
        </ul>
      </Parallax>
    </ParallaxProvider>
  );
}

// isSelected={card.id === selectedId
