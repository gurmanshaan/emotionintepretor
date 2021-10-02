import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "❤️": "love",
  "😑": "annoyance",
  "😴": "sleeping",
  "😠": "angry",
  "😞": "sad",
  "😘": "kiss",
  "😋": "savouring food",
  "😏": "smirk"
};

var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChange(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];
    if (meaning === undefined) {
      meaning = "We don't have in our database";
    }
    setMeaning(meaning);
  }

  function emo(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Emotion Intepretor</h1>
      <input onChange={emojiChange}></input>
      <h2>{meaning}</h2>
      <div>
        {emojis.map((item) => {
          return (
            <span
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              onClick={() => emo(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
