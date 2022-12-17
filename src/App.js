import "./styles.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const fetchLocal = async () => {
    const fetched = await fetch("http://localhost:3030/");
    const jsoned = await fetched.json();
    setImage(jsoned.resImage);
    setOptions(jsoned.options);
    setValid(jsoned.valid);
    console.log(jsoned);
    // console.log(jsoned.resImage);
  };
  const [image, setImage] = useState("");
  const [options, setOptions] = useState([]);
  const [valid, setValid] = useState("");

  const isVailid = (e) => {
    if (e.target.innerText === valid) {
      alert("true");
    }
  };

  useEffect(() => {
    fetchLocal();
  }, []);

  return (
    <div className="App">
      <h1>Are you a robot?</h1>
      <h2>What is the following image?</h2>
      {image && <img src={image} />}

      <div id="options">
        {options &&
          options.map((opt, index) => {
            return (
              <div key={index} onClick={isVailid}>
                {opt}{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
}
