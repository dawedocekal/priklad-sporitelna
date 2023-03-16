// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage';

export function App() {
  useEffect(() => {
    fetch('/api')
      .then(t => t.json())
      .then((d) => console.log(d))
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} /> 
    </Routes>
  );
}

export default App;
