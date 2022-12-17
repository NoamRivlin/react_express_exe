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


/* 
import express from 'express';
import cors from 'cors';
const server = express();
const PORT = 3030;
const options = ['fuel', 'battery', 'crystal', 'candle'];

server.use(cors());

server.get('/', async (req, res) => {
  const randoIndex = Math.floor(Math.random() * (options.length - 1));
  const valid = options[randoIndex];
  const image = await fetch(
    `https://agams-captcha.onrender.com/?captcha=${valid}&pass=agamsclass`
  );
  const resImage = await image.text();
  console.log('resImage', resImage);
  res.json({
    resImage,
    options: options,
    valid: valid,
  });
});

server.listen(PORT);

*/
