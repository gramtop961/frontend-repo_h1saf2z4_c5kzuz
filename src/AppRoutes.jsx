import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Timeline from './pages/Timeline';
import Schedule from './pages/Schedule';
import Rounds from './pages/Rounds';
import Contact from './pages/Contact';

export default function AppRoutes(){
  return (
    <Routes>
      <Route element={<App />}> 
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="payment" element={<Payment />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="rounds" element={<Rounds />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
