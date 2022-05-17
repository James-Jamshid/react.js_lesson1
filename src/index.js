import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Document from './components/Document'
import HomePage from './components/HomePage'

import AppCon from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppCon />} />
      <Route path='/HomePage' element={<HomePage />} />
      <Route path='/Document' element={<Document />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>


);
