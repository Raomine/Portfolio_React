import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import rocketImage from "./assets/space-rocket.png";
import gifImage from "./assets/giphy.gif";

function App() {
  const [count, setCount] = useState(10);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count === 1) {
      setAnimate(true);
    }
  };

  return (
    <>
      <nav>
        <Link>A propos</Link>
        <Link>Compétences</Link>
        <Link>Projets</Link>
        <Link>Contact</Link>
        <div className="logo">
          <img className="rocket" src={rocketImage} alt="Fusée" />
        </div>
      </nav>

      <main>
        <h1>Bienvenue sur mon Portfolio</h1>
        <div className="card">
          <button onClick={handleClick}>Compte à rebours {count}</button>
          {animate && count === 0 && (
            <img className="gif" src={gifImage} alt="GIF" />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
