import React, { useState } from "react";
import "./App.css";
import { data } from "./data";
import { ToastContainer } from "react-toastify";
import { notify } from "./Toast";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [textArea, setTextArea] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount >= 4) {
      amount = 4;
    }
    setText(data.slice(0, amount));
    setTextArea(data.slice(0, amount));
  };
  const copyText = () => {
    notify("copied");
    navigator.clipboard.writeText(textArea);
  };
  return (
    <div className="section-center">
      <h2>لورم ساز</h2>
      <form action="" className="lorem" onSubmit={submitHandler}>
        <label htmlFor="total">
          <h3> تعداد پارگراف : </h3>
        </label>
        <input
          min="0"
          max="4"
          type="number"
          name=""
          id="total"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="submit">بساز</button>
      </form>
      {text && (
        <button className="copy" onClick={copyText}>
          کپی کن
        </button>
      )}

      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
      <ToastContainer />
    </div>
  );
}
export default App;
