import React from 'react';
import './Entrypage.css';

export default function EntryPage({ setUserInfo }) {
  const [name, setName] = React.useState('');
  const [rollNo, setRollNo] = React.useState('');

  const handleStart = () => {
    if (name && rollNo) {
      setUserInfo({ name, rollNo });
    } else {
      alert('Please enter your name and roll number to start the quiz.');
    }
  };

  return (
    <div className="entryFormContainer">
      <h2 className="entryFormTitle">Enter Your Details</h2>
      <form className="entryForm">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="formInput"
        />
        <input
          type="text"
          placeholder="Roll No."
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="formInput"
        />
        <button onClick={handleStart} className="startButton">Start Quiz</button>
      </form>
    </div>
  );
}
