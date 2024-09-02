import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/calendar';
import NavBar from './components/navbar';
import FirstPage from './components/firstPage';
import Reconectare from './components/reconectare'; // Import your new component
import Consultanta from './components/consultanta'; // Import your new component
import MainPage from './components/mainPage'; // Import your new component


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/reconectare" element={<Reconectare />} /> {/* Add route for Reconectare */}
          <Route path="/consultanta" element={<Consultanta />} /> {/* Add route for Consultanta */}
          <Route path="/mainpage" element={<MainPage />} /> {/* Add route for Consultanta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
