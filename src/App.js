import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
 
import Home from './Home';
import TimeTable from './TimeTable';
 
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<TimeTable />} />
      </Routes>
    </div>
  );
}