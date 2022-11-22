'use client';

import styles from './card.module.scss';
import LikeButton from './LikeButton';
import GotoButton from './GotoButton';
import {spaceGroteskFont} from '../../fonts/fonts';

export interface CardProps {
  id: string;
  title: string;
}

const Card = ({id, title}: CardProps) => {
  return (
    <article className={styles.glassCard} key={id}>
      <h1 className={spaceGroteskFont.variable}>{title}</h1>
      <LikeButton />
      <GotoButton label='Open Post' url={`/posts/${id}`} />
    </article>
  );
};

export default Card;
