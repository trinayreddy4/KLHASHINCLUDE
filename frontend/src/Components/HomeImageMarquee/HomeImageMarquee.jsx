import React from 'react';
import styles from './ImageMarquee.module.css';

const ImageMarquee = () => {
  const speakers = [
    { id: 1, imgSrc: 'https://i.ibb.co/k1sYCKW/image4-c11beb595eb0ba49e9f3.jpg', altText: 'Speaker 1' },
    { id: 2, imgSrc: 'https://i.ibb.co/nmVf0B5/image5-ac4c211d7ab5e29a6412.jpg', altText: 'Speaker 2' },
    { id: 3, imgSrc: 'https://i.ibb.co/Rbyk5fB/hod1.jpg', altText: 'Speaker 3' },
    { id: 4, imgSrc: 'https://i.ibb.co/Wfz7JQw/hod.jpg', altText: 'Speaker 4' },
    { id: 4, imgSrc: 'https://i.ibb.co/NyThy8N/prof.jpg', altText: 'Speaker 4' },
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {speakers.map(speaker => (
          <div key={Math.random()*1000} className={styles.imageWrapper}>
            <img src={speaker.imgSrc} alt={speaker.altText} className={styles.image} />
          </div>
        ))}
        {speakers.map(speaker => (
          <div key={Math.random()*1000} className={styles.imageWrapper}>
            <img src={speaker.imgSrc} alt={speaker.altText} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageMarquee;
