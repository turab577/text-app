import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text !== "") {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase");
    }
  };

  const handleLowClick = () => {
    if (text !== "") {
      let low = text.toLowerCase();
      setText(low);
      props.showAlert("Converted to lowercase");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let message = new SpeechSynthesisUtterance();
    message.text = text;
    window.speechSynthesis.speak(message);
  };

  const clear = () => {
    if (text !== "") {
      setText("");
      props.showAlert("Text cleared");
    }
  };

  const copy = () => {
    if (text !== "") {
      let textArea = document.getElementById("myBox");
      textArea.select();
      navigator.clipboard.writeText(textArea.value);
      props.showAlert("Text copied");
    }
  };

  const removeExtraSpaces = () => {
    if (text !== "") {
      let remove = text.split(/[ ]+/);
      setText(remove.join(" "));
      props.showAlert("Extra spaces removed");
    }
  };

  const textColor = props.mode === "light" ? "text-dark" : "text-white";
  const backgroundColor = props.mode === "light" ? "bg-light" : "bg-dark";

  // Filter empty elements and count only non-empty words
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((element) => element.length > 0).length;

  return (
    <>
      <div className={`container ${backgroundColor} ${textColor}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Text Area
          </label>
          <textarea
            className={`form-control ${backgroundColor} ${textColor}`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "#fff" : "#343a40",
              color: props.mode === "light" ? "#000" : "#fff",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button type="submit" onClick={speak} className="btn btn-primary my-2">
          Speak
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clear}>
          Clear All
        </button>
        <button className="btn btn-primary" onClick={copy}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className={`container my-3 ${backgroundColor} ${textColor}`}>
        <h2>Your text summary</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>
          {0.008 * wordCount} minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter to preview"}</p>
      </div>
    </>
  );
}
