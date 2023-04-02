import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
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
            <h1 style={{}}>{title}</h1>
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

interface ListProps {
  selectedId: string | undefined;
}

export default function List({ selectedId }: ListProps) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
