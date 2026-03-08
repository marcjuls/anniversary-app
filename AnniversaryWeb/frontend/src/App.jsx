import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    // Fetching from your local backend!
    fetch("http://localhost:3000/api/memories")
      .then((response) => response.json())
      .then((data) => setMemories(data))
      .catch((error) => console.error("Error fetching memories:", error));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Happy 1st Anniversary! ❤️</h1>
        <p>April 6, 2025 — Forever</p>
      </header>

      <div className="timeline">
        {memories.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <span className="date">{item.date}</span>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
