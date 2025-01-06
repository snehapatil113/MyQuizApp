import React, { useState } from "react";
import { data } from "./Data";
import EntryPage from "./Entrypage";
import './App.css';

export default function Quizapp() {
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinish] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', rollNo: '' });

  const handleNext = () => {
    if (!option) {
      alert('Please select an option before proceeding!');
      return;
    }

    if (data[index].Correct === option) {
      setScore((prevScore) => prevScore + 1);
    }

    if (index < data.length - 1) {
      setIndex(index + 1);
      setOption(null);
    } else {
      setFinish(true);
    }
  };

  if (!userInfo.name) {
    return <EntryPage setUserInfo={setUserInfo} />;
  }

  if (finished) {
    return (
      <div className="scorePage">
        <h1>Quiz Finished</h1>
        <h3>Your Score is {score} out of {data.length}</h3>
        <p>Name: {userInfo.name}</p>
        <p>Roll No: {userInfo.rollNo}</p>
      </div>
    );
  }

  const handleSelect = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <div className="quiz">
      <div className="userInfo">
        <p>Name: {userInfo.name}</p>
        <p>Roll No: {userInfo.rollNo}</p>
      </div>
      <h3>{data[index].Question}</h3>
      <ul>
        <li
          className={option === 'Option1' ? "selected" : ""}
          onClick={() => handleSelect('Option1')}
        >
          {data[index].Option1}
        </li>
        <li
          className={option === 'Option2' ? "selected" : ""}
          onClick={() => handleSelect('Option2')}
        >
          {data[index].Option2}
        </li>
        <li
          className={option === 'Option3' ? "selected" : ""}
          onClick={() => handleSelect('Option3')}
        >
          {data[index].Option3}
        </li>
        <li
          className={option === 'Option4' ? "selected" : ""}
          onClick={() => handleSelect('Option4')}
        >
          {data[index].Option4}
        </li>
      </ul>
      <button onClick={handleNext}>Next</button>
      <h5>Question {index + 1} of {data.length}</h5>
    </div>
  );
}
