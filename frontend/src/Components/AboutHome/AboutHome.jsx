import React from 'react';
import styles from './AboutHome.module.css';

const AboutHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoSection}>
        <video controls>
          <source src="path_to_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.aboutSection}>
        <h3>About #Include</h3>
        <p>
          #INCLUDE, an annual regal celebration orchestrated by FOCUS, the esteemed student governance body of the Computer Science and Engineering department at KL University, is a symphony of vibrancy, innovation, and unwavering student leadership.
        </p>
        <p>
          Each year, #INCLUDE unveils a majestic theme, seamlessly weaving technical prowess with creative expression...
        </p>
        <a className={styles.readMoreButton} href="about">Read More</a>
      </div>
    </div>
  );
}

export default AboutHome;
