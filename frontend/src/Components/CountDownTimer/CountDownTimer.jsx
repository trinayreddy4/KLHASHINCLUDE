import React, { useState, useEffect } from 'react';
import styles from './CountDownTimer.module.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className={styles.countdownContainer}>
      <h2 className={styles.countdownTitle}>
        Experience the <span className={styles.highlight}>Blast</span> in
      </h2>
      <div className={styles.countdownTimers}>
        <div className={styles.countdownItem}>
          <h1 className={styles.countdownNumber}>{timeLeft.days}</h1>
          <p className={styles.countdownLabel}>DAYS</p>
        </div>
        <div className={styles.countdownItem}>
          <h1 className={styles.countdownNumber}>{timeLeft.hours}</h1>
          <p className={styles.countdownLabel}>HOURS</p>
        </div>
        <div className={styles.countdownItem}>
          <h1 className={styles.countdownNumber}>{timeLeft.minutes}</h1>
          <p className={styles.countdownLabel}>MINUTES</p>
        </div>
        <div className={styles.countdownItem}>
          <h1 className={styles.countdownNumber}>{timeLeft.seconds}</h1>
          <p className={styles.countdownLabel}>SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
