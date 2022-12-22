import "./App.css";
import React from "react";
import { useState } from "react";
import logo from "./assets/logo.png";
import add from "./assets/add.png";
import remove from "./assets/remove.png";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="header">
          <img src={logo} alt="logo" />
          <h1>React Counter</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="counter">
            <div className="commandBox">
              {counter > 0 ? (
                <img
                  src={remove}
                  alt="remove"
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                />
              ) : (
                <img className="hide" src={remove} alt="remove" />
              )}
            </div>
            <div className="value">
              <p>{counter}</p>
            </div>
            <div className="commandBox">
              {counter < 10 && (
                <img
                  src={add}
                  alt="add"
                  onClick={() => {
                    // on appelle setCounter pour mettre à jour le state
                    setCounter(counter + 1);
                  }}
                />
              )}
            </div>
          </div>
          <button
            onClick={() => {
              // on appelle setCounter pour mettre à jour le state
              setCounter(0);
            }}
          >
            Reset
          </button>
        </section>
      </main>
      <footer>
        <p>
          Made with <span className="bold">React</span> at{" "}
          <span className="bold">Le Reacteur</span> by{" "}
          <span className="bold"> Freemulder</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
