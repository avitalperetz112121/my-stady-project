import React from 'react';
import StudyChecklist from './components/StudyChecklist';
import StudyTime from './components/StudyTime';
import Motivation from './components/Motivation';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Study Space</h1>
        <p>המסך האישי שלך לניהול, ארגון ושיפור סביבת הלמידה במקום אחד.</p>
      </header>

      <main className="main-content">
        <StudyChecklist />
        <StudyTime />
        <Motivation />
      </main>
    </div>
  );
}

export default App;