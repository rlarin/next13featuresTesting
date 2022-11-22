'use client';

import styles from './button.module.scss';

export interface GoToButtonProps {
  label: string;
  url: string;
}

const GotoButton = ({label, url}: GoToButtonProps) => {
  const gotoHandler = () => {
    window.location.href = url;
  };

  return (
    <button className={styles.btn} onClick={gotoHandler}>
      {label}
    </button>
  );
};

export default GotoButton;
