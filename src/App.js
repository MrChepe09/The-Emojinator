import React, { useState } from "react";
import "./styles.css";

const DB = {
  "😀": "Happy",
  "😅": "Exercise",
  "😂": "Laughing",
  "😍": "Heart Face",
  "😘": "Kissing",
  "😔": "Sad",
  "🙄": "Eye Roll",
  "😑": "Straight Face",
  "😌": "Pleased",
  "😬": "Awkward",
  "🤥": "Lying",
  "🤔": "Thinking"
};

const emojiKeys = Object.keys(DB);
// console.log(DB);
console.log(emojiKeys);

export default function App() {
  const [meaning, setMeaning] = useState("Not in our DB");
  const [value, setValue] = useState("");

  const checkEmoji = (event) => {
    const input = event.target.value;
    setValue(input);

    const mean = DB[input];

    if (mean === undefined) {
      setMeaning("Not in our DB");
    } else {
      setMeaning(mean);
    }
  };

  const clickEmoji = (emoji) => {
    setValue(emoji);
    const mean = DB[emoji];

    if (mean === undefined) {
      setMeaning("Not in our DB");
    } else {
      setMeaning(mean);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Emojinator</h1>
      <div className="main-content">
        <h2>Enter your Emoji below to find its meaning</h2>
        <input
          onChange={checkEmoji}
          value={value}
          placeholder="Enter the Emoji here"
        />
        <h2 style={{ fontSize: "2rem" }}>
          Meaning: <span style={{ color: "orange" }}>{meaning}</span>
        </h2>

        <h2>Some of our Emoji</h2>
        <div style={{ maxWidth: "80%", margin: "auto" }}>
          {emojiKeys.map(function (emoji) {
            return (
              <span
                onClick={() => clickEmoji(emoji)}
                style={{ fontSize: "2rem", cursor: "pointer" }}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
