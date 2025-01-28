import React from "react";
import { useState } from "react";
import "../CSS/Textform.css";

export default function Textform({
  heading = "No heading",
  mode,
  changeAlert,
}) {
  const [text, setText] = useState("");

  function onChangeHandler(event) {
    setText(event.target.value);
  }
  const cvtUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    changeAlert({
      message: "Converted to Upper Case",
      type: "success",
    });
  };

  function cvtLowerCase() {
    let newText = text.toLowerCase();
    setText(newText);
    changeAlert({
      message: "Converted to Lower Case",
      type: "success",
    });
  }

  function clearText() {
    let newText = "";
    setText(newText);
    changeAlert({
      message: "Cleared Text",
      type: "success",
    });
  }

  function howManyA() {
    let a = text.split("").sort();
    let num = a.slice(a.indexOf("a"), a.lastIndexOf("a") + 1).length;
    setText("You had: " + num + " A's");
  }

  function countWordsAndChars(key) {
    text.trim();
    let newtext = text.split(" ");
    newtext = newtext.filter((item) => item.length !== 0);
    if (key === "words") {
      return newtext.length;
    } else {
      return text.length;
    }
  }

  function styleObj() {
    if (mode === "light") {
      return {
        color: "white",
        backgroundColor: "rgb(0, 119, 255)",
      };
    } else if (mode === "dark") {
      return {
        color: "rgb(0, 191, 255)",
        backgroundColor: "#343a40",
      };
    } else {
      return {
        color: "white",
        backgroundColor: "rgb(91, 167, 249)",
      };
    }
  }
  return (
    <div
      className={`container my-4 p-3 bg-${mode}`}
      style={{
        transition: "0.3s",
        borderRadius: "15px",
        color: mode === "light" ? "black" : "white",
      }}
    >
      <h2>
        <b>{heading}</b>
      </h2>
      <div className="mb-3">
        <textarea
          className="form-control px-3 py-3"
          id="exampleFormControlTextarea1"
          style={{
            borderColor:
              mode === "light" || mode === "dark"
                ? "rgb(0, 191, 255)"
                : "rgb(16, 45, 124)",
            borderWidth: "2px",
            borderRadius: "23px",
            backgroundColor:
              mode === "light"
                ? "white"
                : mode === "dark"
                ? "#343a40"
                : "rgb(91, 167, 249)",
            color: mode === "light" ? "black" : "white",
          }}
          rows="10"
          value={text}
          onChange={onChangeHandler}
        ></textarea>
        <button
          className="btn btn-primary my-3 mx-3 mybutton"
          onClick={cvtUpperCase}
          style={styleObj()}
        >
          Upper Case
        </button>
        <button
          className="btn btn-primary my-3 mx-3 mybutton"
          onClick={cvtLowerCase}
          style={styleObj()}
        >
          Lower Case
        </button>
        <button
          className="btn btn-primary my-3 mx-3 mybutton"
          onClick={clearText}
          style={styleObj()}
        >
          Clear
        </button>
        <button
          className="btn btn-primary my-3 mx-3 mybutton"
          onClick={howManyA}
          style={styleObj()}
        >
          howManyA
        </button>
      </div>
      <p>
        Words: {countWordsAndChars("words")} Characters:{" "}
        {countWordsAndChars("chars")}
      </p>
      <div className="container">
        <h2>
          <b>Preview: </b>
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
