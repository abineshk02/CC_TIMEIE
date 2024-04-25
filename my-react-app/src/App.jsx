import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';
import Loginpage from './pages/Loginpage';
import MainDbBlankPage from './pages/MainDbBlankPage';
import Signup from './pages/signUp';

export default function App() {
  return (
    <Router> 
      <Routes>
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/dashboard" element={<MainDbBlankPage/>}/>
          <Route path="/signup" element={<Signup/>} />
          </Routes>
    </Router>
  );
}
