import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleInClick = () => {
    let newText =
      text === text.toLowerCase() ? text.toUpperCase() : text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to inverted case", "success");
  };

  const handleClrClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    let textElement = document.getElementById("myBox");
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    props.showAlert("Text copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInClick}>
          Toggle Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === "" ? "0" : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
