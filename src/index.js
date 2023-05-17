import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Black from './Black';
import Brown from './Brown';
import Green from './Green';
import Form from './Form';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <div className="App">
   <ul className="App-header">
     <li>
      <Link to="/App" className="link">Home</Link>
     </li>
     <li>
       <Link to="/Black" className="link">Black Coconut</Link>
     </li>
     <li>
       <Link to="/Brown" className="link">Brown Coconut</Link>
     </li>
     <li>
       <Link to="/Green" className="link">Green Coconut</Link>
     </li>
     <li>
       <Link to="/Contact"  className="link">Contact Us</Link>
     </li>
     <li>
       <Link to="/Form"  className="link">Customer Details</Link>
     </li>
   </ul>
  <Routes>
        <Route exact path='/App' element={< App />}></Route>
        <Route exact path='/Black' element={< Black />}></Route>
        <Route exact path='/Brown' element={< Brown />}></Route>
        <Route exact path='/Green' element={< Green />}></Route>
        <Route exact path='/Contact' element={< Contact />}></Route>
        <Route exact path='/Form' element={< Form />}></Route>
 </Routes>
 </div>
</Router>
);

