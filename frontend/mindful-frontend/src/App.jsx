import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/header';
import SignupForm from './components/signup/SignupForm';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    
    </Router>
  )
}

export default App
