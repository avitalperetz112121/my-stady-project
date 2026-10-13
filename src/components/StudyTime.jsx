import React, { useState, useEffect } from 'react';
import styles from './StudyTime.module.css';

function StudyTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // עדכון השעה בכל שנייה
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // ניקוי הטיימר בעת הסרת הרכיב
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('he-IL');
  const formattedTime = currentTime.toLocaleTimeString('he-IL');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>זמן למידה וזמן נוכחי</h2>
      <p className={styles.timeText}><strong>תאריך:</strong> {formattedDate}</p>
      <p className={styles.timeText}><strong>שעה:</strong> {formattedTime}</p>
    </div>
  );
}

export default StudyTime;