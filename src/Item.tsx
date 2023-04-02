/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { items } from './Data';

function Item({ id }) {
  const {
    title,
    backdrop_path,
    overview,
    vote_average,
    release,
    original_title,
    original_language,
  } = items.find((item: { any }) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
      >
        <Link to="/topmovies" />
      </motion.div>

      <div className="card-content-container open">
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
            <span style={{ display: 'flex' }} className="category">
              <StarIcon sx={{ color: 'white', fontSize: '15px' }} />
              {vote_average}
            </span>
            <h2>{title}</h2>
          </motion.div>

          <motion.div className="content-container" animate>
            {/* <div> */}
            <div>
              {original_title && (
                <span style={{ fontWeight: 'bold', display: 'inline' }}>
                  Original title:
                </span>
              )}{' '}
              {original_title}
              <br />
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Release date:
              </span>{' '}
              {release}
              <br />
              {original_language && (
                <span style={{ fontWeight: 'bold', display: 'inline' }}>
                  Language:
                </span>
              )}{' '}
              {original_language}
            </div>
            <br />
            <Button
              className="addToWatchList"
              variant="contained"
              startIcon={<WatchLaterIcon />}
              style={{
                backgroundColor: 'orange',
                marginBottom: '10px',
                borderRadius: '30px',
                alignSelf: 'end',
                width: 'auto',
                fontSize: '11px',
                zIndex: '2',
              }}
            >
              Add to watchlist
            </Button>

            {overview}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Item;
