import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This project was coded by Briana A and is{" "}
          <a
            href="https://github.com/Nadie0816/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://boisterous-lollipop-9c376f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netflify
          </a>
        </footer>
      </div>
    </div>
  );
}
