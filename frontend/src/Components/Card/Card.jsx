import React from 'react';
import styles from './Card.module.css';

const Card = ({ imageSrc, altText }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={altText} className={styles.cardImage} />
    </div>
  );
}

export default Card;
