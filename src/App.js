import './App.css';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Routes, Route } from 'react-router';
import Complaints from './components/Complaints/Complaints';
import Manage from './components/Manage/Manage';
import Feedback from './components/Feedback/Feedback';
import UserProfile from './components/UserProfile/UserProfile';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useState } from 'react'; // Import useState hook

function App() {
  

  return (
    <div id="App">
      <Sidebar/>
      <div className='content-area'>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<Login/>} /> */}
          <Route path="/" element={<MainDash />} />

          <Route path="/dashboard" element={<MainDash />} />
          <Route path="/userprofile" element={<UserProfile />} />
          
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
