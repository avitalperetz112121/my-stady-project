import React, { useState } from 'react';
import styles from './StudyChecklist.module.css';

function StudyChecklist() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'לקרוא פרק 6 בספר', completed: false },
    { id: 2, text: 'לפתור תרגיל ב-React', completed: false },
    { id: 3, text: 'לחזור על מושגים מרכזיים', completed: false },
    { id: 4, text: 'להכין סיכום שיעור', completed: false },
    { id: 5, text: 'לסדר את סביבת העבודה', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>רשימת משימות לימודיות</h2>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <label className={task.completed ? styles.completed : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudyChecklist;