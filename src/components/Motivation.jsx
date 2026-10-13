import React, { useState } from 'react';

function Motivation() {
  const quotes = [
    'כל יום הוא הזדמנות חדשה ללמוד משהו חדש.',
    'הצלחה היא סכום של מאמצים קטנים שחוזרים על עצמם מדי יום.',
    'אל תפחד לצעוד לאט, תפחד רק מלעמוד במקום.',
    'הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו.',
    'צעד קטן היום יביא להישג גדול מחר.'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showAlertQuote = () => {
    const nextIndex = (currentIndex + 1) % quotes.length;
    setCurrentIndex(nextIndex);
    alert(quotes[nextIndex]);
  };

  // Inline Styles עבור העיצוב
  const containerStyle = {
    border: '2px solid #8e44ad',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px',
    backgroundColor: '#f5eeed',
    textAlign: 'center'
  };

  const titleStyle = {
    color: '#8e44ad',
    marginTop: '0'
  };

  const buttonStyle = {
    backgroundColor: '#8e44ad',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 16px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>פינת המוטיבציה</h2>
      <p style={{ fontSize: '16px', color: '#333' }}>
        לחצי על הכפתור לקבלת משפט מוטיבציה!
      </p>
      <button style={buttonStyle} onClick={showAlertQuote}>
        קבלי משפט מוטיבציה
      </button>
    </div>
  );
}

export default Motivation;