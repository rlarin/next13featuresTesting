'use client';

import {useState} from 'react';
import styles from './button.module.scss';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button className={styles.btn} onClick={() => setLiked(!liked)}>
      {liked ? 'Liked 🥰' : 'Like ❤'}
    </button>
  );
};

export default LikeButton;
