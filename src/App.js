import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IndexedDB, LocalStorage } from "./storage";

function App() {
  const [time, setTime] = useState(new Date().toISOString());
  const [timeIDB, setTimeIDB] = useState("");
  const [timeLS, setTimeLS] = useState("");

  const handleSave = () => {
    IndexedDB.save(time);
    LocalStorage.save(time);
  };

  useEffect(() => {
    IndexedDB.load().then(setTimeIDB);
    setTimeLS(LocalStorage.load());
  }, [setTimeIDB, setTimeLS]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>В indexedDB: {timeIDB}</p>
        <p>В localStorage: {timeLS}</p>
        <p>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </p>
        <p>
          <button onClick={handleSave}>СОХРАНИТЬ</button>
        </p>
      </header>
    </div>
  );
}

export default App;
